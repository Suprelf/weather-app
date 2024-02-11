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

      <Autocomplete
        apiKey={'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'}
        style={{ width: "90%" }}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "ru" },
        }}
        defaultValue="Amsterdam"
      />

      {/* 
      <form onSubmit={handleSearch} className='search-functional'>
        <input className='search-input' name='city'></input>
        <button className='search-button' type="submit">Add</button>
      </form>
      */}

      <div className='search-autocomplete'>

        <div className='search-autocomplete-item'>
          adasdsdaada
        </div>

      </div>

    </div>
  );
}

export default Search;
