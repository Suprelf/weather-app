import React, { useEffect, useState } from 'react';
import './App.scss';
import Panel from './components/panel/panel';
import Language from './components/language/language';
import Search from './components/search/search';
import City from './interfaces/city';
import InputRawData from './interfaces/inputRawData';
import moment from 'moment';
import WeatherHistoryData from './interfaces/weatherHistoryData';


function App() {
  const Gkey = 'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'
  const WeatherKey = 'a53096724844cd3d01b653c9ae7d141a'

  const [glocation, setGlocation] = useState<number[]>([])
  const [glocationLoaded, setGlocationLoaded] = useState<boolean>(false)
  const [localCityDisplayed, setLocalCityDisplayed] = useState<boolean>(false)
  const [displayedCities, setDisplayedCities] = useState<City[]>([])
  const [storageCityAdded, setStorageCityAdded] = useState<number>(0)

  function LocalStorage_addCity(city: City) {
    let storedCities: Array<City> = JSON.parse(localStorage.getItem('cities') ?? '[]')
    let isPresent = false

    storedCities.map((storedCity) => {
      if (city.id === storedCity.id) {
        isPresent = true
      }
    })
    if (!isPresent) {
      storedCities.push(city)
    }

    localStorage.setItem('cities', JSON.stringify(storedCities))
    setStorageCityAdded(storageCityAdded+1)
  }

  function formatHistorical(historical: any) {
    let formatedData: Array<WeatherHistoryData> = []
    historical.map((day: any) => {
      formatedData.push({
        date: moment.unix(day.dt).format('DD.MM'),
        temperature: Math.round(day.temp.day)
      })
    })

    return formatedData
  }

  function getLocalWeatherData(searchData: InputRawData | any) {

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=${WeatherKey}`)
      .then((response) => response.json())
      .then((weatherData) => {

        setDisplayedCities([...displayedCities, {
          id: searchData.name + searchData.country,

          lat: weatherData.lat,
          lon: weatherData.lon,
          name: searchData.name,
          country: searchData.country,

          date: moment().format('dddd, Do MMMM, h:mm'),

          temperature: weatherData.current.temp,
          weather: weatherData.current.weather[0].main,
          wind: weatherData.current.wind_speed,
          humidity: weatherData.current.humidity,
          pressure: weatherData.current.pressure,
          feels: weatherData.current.feels_like,

          icon: weatherData.current.weather[0].icon,
          metrics: "Celsius",
          historyData: formatHistorical(weatherData.daily)
        }
        ])
        setLocalCityDisplayed(true)
      })
      .catch((err) => { console.log(err.message); console.log('failed to fetch city weather') })
  }

  function getInputWeatherData(searchData: InputRawData) {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=${WeatherKey}`)
      .then((response) => response.json())
      .then((weatherData) => {

        LocalStorage_addCity({
          id: searchData.name + searchData.country,

          lat: weatherData.lat,
          lon: weatherData.lon,
          name: searchData.name,
          country: searchData.country,

          date: moment().format('dddd, Do MMMM, h:mm'),

          temperature: weatherData.current.temp,
          weather: weatherData.current.weather[0].main,
          wind: weatherData.current.wind_speed,
          humidity: weatherData.current.humidity,
          pressure: weatherData.current.pressure,
          feels: weatherData.current.feels_like,

          icon: weatherData.current.weather[0].icon,
          metrics: "Celsius",
          historyData: formatHistorical(weatherData.daily)
        })

      })
      .catch((err) => { console.log(err.message); console.log('failed to fetch city weather') })
  }

  function getInputRawData(data: InputRawData) {
    getInputWeatherData(data)
  }

  //get geopos
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGlocation([position.coords.latitude, position.coords.longitude]);
      setGlocationLoaded(true)
    });
  }, []);

  //get local city weather
  useEffect(() => {
    if (glocationLoaded) {
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${glocation[0]}&lon=${glocation[1]}&limit=1&appid=${WeatherKey}`)
        .then((response) => response.json())
        .then((cityName) => {
          getLocalWeatherData(
            {
              name: cityName[0].name,
              country: cityName[0].country,
              lat: cityName[0].lat,
              lon: cityName[0].lon
            }
          )
        })
        .catch((err) => { console.log(err.message); console.log('failed to fetch city name') })
    }
  }, [glocationLoaded]);

  //get localstorage cities
  useEffect(() => {
    if (localCityDisplayed) {
      let storedCities: Array<City> = JSON.parse(localStorage.getItem('cities') ?? '[]')

      setDisplayedCities([...displayedCities, ...storedCities])
    }

  }, [localCityDisplayed])

  //update on added
  useEffect(() => {
    if (storageCityAdded) {
      let storedCities: Array<City> = JSON.parse(localStorage.getItem('cities') ?? '[]')

      setDisplayedCities([...displayedCities, storedCities[storedCities.length-1]])
    }

  }, [storageCityAdded])

  return (
    <div className='app-layout'>

      <div className='app-language'>
        <Language></Language>
      </div>

      <div className='app-seacrh'>
        <Search passData={getInputRawData}></Search>
      </div>

      <div className='app-panels'>
        {displayedCities.map((cityItem) =>
          <Panel
            id={cityItem.id}
            lat={cityItem.lat}
            lon={cityItem.lon}
            name={cityItem.name}
            country={cityItem.country}
            date={cityItem.date}
            temperature={cityItem.temperature}
            weather={cityItem.weather}
            wind={cityItem.wind}
            humidity={cityItem.humidity}
            pressure={cityItem.pressure}
            feels={cityItem.feels}

            icon={cityItem.icon}
            metrics={cityItem.metrics}

            historyData={cityItem.historyData}
          />
        )}
      </div>

    </div>
  );
}

export default App;
