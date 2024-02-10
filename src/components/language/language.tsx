import React, { useState } from 'react';
import './language.scss';

function Language() {

  function switchOpen() {
    setIsOpen(!isOpen)
  }

  const [selectedLanguage, setSelectedLanguage] = useState<string>('EN')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='language-container'>

      <div className='language-header' onClick={switchOpen}>
        <span>Icon</span>
        <span>{selectedLanguage}</span>
        <span>arr</span>
      </div>

      {(isOpen) &&
        <div className='language-select'>
          <div className='language-option' id='EN' 
            onClick={(e) => {setSelectedLanguage(e.currentTarget.id)}}>EN</div>
          <div className='language-option' id='UA' 
            onClick={(e) => {setSelectedLanguage(e.currentTarget.id)}}>UA</div>
          <div className='language-option' id='HE' 
            onClick={(e) => {setSelectedLanguage(e.currentTarget.id)}}>HE</div>
        </div>
      }

    </div>
  );
}

export default Language;
