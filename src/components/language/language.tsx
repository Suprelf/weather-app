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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        <span>{selectedLanguage}</span>
        {isOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="18 15 12 9 6 15"></polyline></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        }
      </div>

      {(isOpen) &&
        <div className='language-select'>
          <div className='language-option' id='EN'
            onClick={(e) => { setSelectedLanguage(e.currentTarget.id) }}>EN</div>
          <div className='language-option' id='UA'
            onClick={(e) => { setSelectedLanguage(e.currentTarget.id) }}>UA</div>
          <div className='language-option' id='HE'
            onClick={(e) => { setSelectedLanguage(e.currentTarget.id) }}>HE</div>
        </div>
      }

    </div>
  );
}

export default Language;
