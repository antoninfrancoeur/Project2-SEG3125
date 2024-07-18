import React, { useState, useEffect } from 'react';
import './LanguageDropdown.css'; // Import CSS file for styling
import { useT } from "talkr";

export var lang = "en";
const options = {
  "en":"English",
  "pirate":"Pirate Slang",
  "fr":"Français"
};

const LanguageDropdown = () => {
  const { T, locale, setLocale } = useT();


  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    setLocale(language);
  };

  return (
    <div className="language-dropdown">
      <span>{T("language-label")}</span>
      <div className="language-dropdown">
        <div className="language-dropdown-btn">
          {options[locale]} <i className="material-symbols-rounded">keyboard_arrow_down</i>
        </div>
        <div className="language-dropdown-content">
          <div onClick={() => handleChangeLanguage('en')}>{options.en}</div>
          <div onClick={() => handleChangeLanguage('pirate')}>{options.pirate}</div>
          <div onClick={() => handleChangeLanguage('fr')}>{options.fr}</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
