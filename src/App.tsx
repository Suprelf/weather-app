import React from 'react';
import './App.scss';
import Panel from './components/panel/panel';
import Language from './components/language/language';
import Search from './components/search/search';

function App() {
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
