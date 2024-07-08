import React, { useState } from 'react';
import './LanguageDropdown.css'; // Import CSS file for styling

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('New English'); // State to manage selected language

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    // You can implement language change logic here
  };

  return (
    <div className="language-dropdown">
      <span>Language: </span>
      <div className="dropdown">
        <div className="dropdown-btn">
          {selectedLanguage} <i className="material-symbols-rounded">keyboard_arrow_down</i>
        </div>
        <div className="dropdown-content">
          {/* Replace with your language options */}
          <div onClick={() => handleChangeLanguage('New English')}>New English</div>
          <div onClick={() => handleChangeLanguage('Old English')}>Old English</div>
          <div onClick={() => handleChangeLanguage('New French')}>New French</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
