import React from 'react';
import './search.scss';
import Autocomplete from "react-google-autocomplete";

function Search() {

  function handleSearch(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }



  return (
    <div className='search-container'>

      <form onSubmit={handleSearch} className='search-functional'>
        <Autocomplete
          id = 'autocomplete-input'
          apiKey={'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          className='search-input'
          language='en'          
        />
        <button className='search-button' type="submit">Add</button>
      </form>

    </div>
  );
}

export default Search;
