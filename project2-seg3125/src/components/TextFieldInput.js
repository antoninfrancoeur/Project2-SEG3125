import React, { useState } from 'react';
import './Inputs.css'
import { useT } from "talkr";

export function TextFieldInput({ maxLength, caption, placeholder}) {
  const [text, setText] = useState('');

  const { T } = useT();
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      <p>{caption}</p>
      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <div className="char-counter">
        {maxLength - text.length} {T("other.characters-remaining")}
      </div>
    </div>
  );
}

export function TextLineFieldInput({ maxLength, caption, placeholder}) {
  const [text, setText] = useState('');

  const { T } = useT();
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      <p>{caption}</p>
      <input
        type='text'
        className="textline"
        value={text}
        onChange={handleTextChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <div className="char-counter">
        {maxLength - text.length} {T("other.characters-remaining")}
      </div>
    </div>
  );
}