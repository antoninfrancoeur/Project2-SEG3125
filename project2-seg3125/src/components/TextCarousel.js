import React, { useEffect, useRef, useState } from 'react';
import './TextCarousel.css';

const TextCarousel = ({ text }) => {
  const textRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const textElement = textRef.current;
    const textWidth = textElement.scrollWidth / 3; // because we duplicate the text
    const speed = 75; // pixels per second, adjust as needed

    const animationDuration = textWidth / speed;
    const translationDistance = textWidth;

    setDuration(animationDuration);
    setTranslateX(translationDistance);

    const scrollText = () => {
      textElement.style.animation = `scroll ${animationDuration}s linear infinite`;
    };

    scrollText();
  }, [text]);

  return (
    <div className="carousel-container">
      <div className="carousel-content" ref={textRef} style={{ '--translateX': `${translateX}px` }}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default TextCarousel;
