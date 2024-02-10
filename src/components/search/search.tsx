import React from 'react';
import './search.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Search() {
  return (
    <div className='search-container'>
      <input className='search-input'></input>
      <button className='search-button'>Add</button>
    </div>
  );
}

export default Search;
