import React, { useEffect, useState } from 'react';
import './App.scss';
import Panel from './components/panel/panel';
import Language from './components/language/language';
import Search from './components/search/search';

interface City {
  lat: number
  lon: number

  name: string
  country: string

  date: Date

  temperature: number
  weather: string
  wind: number
  humidity: number
  pressure: number
  feels: number
}

function App() {
  //https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid=a53096724844cd3d01b653c9ae7d141a
  //https://api.openweathermap.org/data/2.5/forecast?lat=${glocation[0]}&lon=${glocation[1]}&appid=a53096724844cd3d01b653c9ae7d141a

  const Gkey = 'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'
  const [glocation, setGlocation] = useState<number[]>([])
  const [glocationLoaded, setGlocationLoaded] = useState<boolean>(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGlocation([position.coords.latitude, position.coords.longitude]);
      setGlocationLoaded(true)
    });
  }, []);

  useEffect(() => {
    if (glocationLoaded) {

      /*
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${glocation[0]}&lon=${glocation[1]}&limit=1&appid=a53096724844cd3d01b653c9ae7d141a`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].name);
      })
      .catch((err) => {
        console.log('failed to fetch data');
      });

      */

      /*
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${glocation[0]}&lon=${glocation[1]}&units=metric&appid=a53096724844cd3d01b653c9ae7d141a`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });

        */
    }

  }, [glocationLoaded]);


  const addCity =async () => {
    
  }

  return (
    <div className='app-layout'>

      <div className='app-language'>
        <Language></Language>
      </div>

      <div className='app-seacrh'>
        <Search></Search>
      </div>

      <div className='app-panels'>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
      </div>

    </div>


  );
}

export default App;
