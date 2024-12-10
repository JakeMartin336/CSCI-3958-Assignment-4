import React from 'react';

const PokemonDisplay = ({ pokemonIndex, revealed }) => {
  const imageSrc = revealed 
    ? `/assets/${pokemonIndex + 1}_after.png` 
    : `/assets/${pokemonIndex + 1}_before.png`;

  return (
    <div>
      <img alt={`Pokemon ${pokemonIndex + 1}`} src={imageSrc} />
    </div>
  );
};

export default PokemonDisplay;
