import React from 'react';
import './search.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Search() {
  return (
    <div className='search-container'>
      <div className='search-functional'>
        <input className='search-input'></input>
        <button className='search-button'>Add</button>
      </div>

      <div className='search-autocomplete'>


        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>
        
      </div>

    </div>
  );
}

export default Search;
