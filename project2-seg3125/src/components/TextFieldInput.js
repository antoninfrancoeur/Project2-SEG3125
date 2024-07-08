import React, { useState } from 'react';
import './Inputs.css'

function TextFieldInput({ maxLength }) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      <p>Give us more detail about your encounter.</p>
      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        maxLength={maxLength}
        placeholder="What were they carrying? Did they see you? Have you noticed them multiple time?"
      />
      <div className="char-counter">
        {maxLength - text.length} characters remaining
      </div>
    </div>
  );
}

export default TextFieldInput;