import React from 'react';
import '../styles/GuessCounter.css';

const GuessCounter = ({ incorrectGuesses }) => {
  return (
    <div id="guess-counter">
      {[...Array(3)].map((_, i) => (
        <img
          key={i}
          className={`pokeball-counter ${i < incorrectGuesses ? 'grayscale' : ''}`}
          alt="Pokeball"
          src="/assets/pokeball.png"
        />
      ))}
    </div>
  );
};

export default GuessCounter;
