import React, { useEffect, useState } from 'react';
import './App.scss';
import Panel from './components/panel/panel';
import Language from './components/language/language';
import Search from './components/search/search';


function App() {
  //https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid=a53096724844cd3d01b653c9ae7d141a
  /*

    var counts = [4, 9, 15, 6, 2],
      goal = 5;

    var closest = counts.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    console.log(closest);
  */



  const [glocation, setGlocation] = useState<number[]>([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGlocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

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
