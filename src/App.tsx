import React, { useEffect, useState } from 'react';
import './App.scss';
import Panel from './components/panel/panel';
import Language from './components/language/language';
import Search from './components/search/search';
import City from './interfaces/city';
import InputRawData from './interfaces/inputRawData';
import moment from 'moment';



function App() {
  //https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid=a53096724844cd3d01b653c9ae7d141a
  //https://api.openweathermap.org/data/2.5/forecast?lat=${glocation[0]}&lon=${glocation[1]}&appid=a53096724844cd3d01b653c9ae7d141a

  const Gkey = 'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'
  const WeatherKey = 'a53096724844cd3d01b653c9ae7d141a'
  const [glocation, setGlocation] = useState<number[]>([])
  const [glocationLoaded, setGlocationLoaded] = useState<boolean>(false)

  const [displayedCities, setDisplayedCities] = useState<City[]>([])

  function getWeatherData(searchData: InputRawData | any) {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=${WeatherKey}`)
      .then((response) => response.json())
      .then((weatherData) => {

        setDisplayedCities([
          ...displayedCities, {
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
            feels: weatherData.current.feels_like
          }
        ])

      })
      .catch((err) => { console.log(err.message); console.log('failed to fetch city weather') })
  }

  function getInputData(data: InputRawData) {
    getWeatherData(data)
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
    if (glocationLoaded && (displayedCities.length === 0)) {
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${glocation[0]}&lon=${glocation[1]}&limit=1&appid=${WeatherKey}`)
        .then((response) => response.json())
        .then((cityName) => {
          getWeatherData(
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




  return (
    <div className='app-layout'>

      <div className='app-language'>
        <Language></Language>
      </div>

      <div className='app-seacrh'>
        <Search passData={getInputData}></Search>
      </div>

      <div className='app-panels'>
        {displayedCities.map((cityItem, id) =>
          <Panel
            key={id}
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
            feels={cityItem.feels} />
        )}
      </div>

    </div>
  );
}

export default App;
