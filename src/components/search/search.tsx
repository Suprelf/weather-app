import React, { useState } from 'react';
import './search.scss';
import Autocomplete from "react-google-autocomplete";
import InputRawData from '../../interfaces/inputRawData';
import { useTranslation } from 'react-i18next';

function Search({ passData }: any) {

  const {t, i18n} = useTranslation()

  const [currentData, setCurrentData] = useState<InputRawData>()

  function passDataToApp(e: any) {
    e.preventDefault();
    if (currentData != undefined) {
      console.log(currentData)
      passData(currentData)
    }


  }

  return (
    <div className='search-container'>

      <form onSubmit={passDataToApp} className='search-functional'>
        <Autocomplete
          id='autocomplete-input'
          apiKey={'AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'}
          
          onPlaceSelected={(place) => {
            console.log(place)
            try {
              setCurrentData({
                name: place.address_components[0].long_name,
                country: place.address_components[3].short_name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng()
              })
            }
            catch {
              alert(t('Failed'))
              setCurrentData(undefined)
            }

          }}
          className='search-input'
          language='en'
        />
        <button className='search-button' type="submit">
          {t('Add')}
        </button>
      </form>

    </div>
  );
}

export default Search;
