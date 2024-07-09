import React, { useState, useRef, useEffect } from 'react';
import './Inputs.css';

const SlideOptionPicker = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectorStyle, setSelectorStyle] = useState({ width: '0px', left: '0px' });
  const optionRefs = useRef([]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    const selectedOptionElement = optionRefs.current[selectedOption];
    if (selectedOptionElement) {
      const { offsetWidth, offsetLeft } = selectedOptionElement;
      setSelectorStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
    }
  }, [selectedOption]);

  return (
    <div className="option-picker">
      <div className="selector" style={selectorStyle} />
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption === index ? 'selected' : ''}`}
          onClick={() => handleOptionClick(index)}
          ref={el => optionRefs.current[index] = el}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
  
export default SlideOptionPicker;
  