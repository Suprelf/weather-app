import React, { useState, useTransition } from 'react';
import './language.scss';
import { useTranslation } from 'react-i18next';

function Language() {

  function switchOpen() {
    setIsOpen(!isOpen)
  }

  const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem('language') ?? 'EN')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { i18n } = useTranslation()

  function onSelected(e: Event | any) {
    setSelectedLanguage(e.currentTarget.id);
    switchOpen();
    i18n.changeLanguage(e.currentTarget.id);
    localStorage.setItem('language', e.currentTarget.id)
  }

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
            onClick={(e) => onSelected(e)}>EN</div>
          <div className='language-option' id='UA'
            onClick={(e) => onSelected(e)}>UA</div>
          <div className='language-option' id='HE'
            onClick={(e) => onSelected(e)}>HE</div>
        </div>
      }

    </div>
  );
}

export default Language;
