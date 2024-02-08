import React from 'react';
import './language.scss';

function Language() {
  return (
    <div className='language-container'>

      <span>Icon</span>

      <select className='language-select'>
        <option className='language-option' value="EN" selected>EN</option>
        <option className='language-option' value="UA">UA</option>
        <option className='language-option' value="HE">HE</option>
      </select>

    </div>
  );
}

export default Language;
