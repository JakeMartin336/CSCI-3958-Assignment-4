import React from 'react';
import '../styles/GuessInput.css';

const GuessInput = ({ input, onInputChange, onSubmit, buttonState, onButtonClick }) => {
  return (
    <div id="guess-input">
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      />
      <button onClick={onButtonClick}>{buttonState}</button>
    </div>
  );
};

export default GuessInput;
