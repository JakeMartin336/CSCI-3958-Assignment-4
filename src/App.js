import React, { useState } from 'react';
import './styles/App.css';
import PokemonDisplay from './components/PokemonDisplay';
import GuessInput from './components/GuessInput';
import GuessCounter from './components/GuessCounter';

const POKEMONS = [
  "Pikachu", "Onix", "Clefairy", "Bulbasaur", 
  "Charmander", "Squirtle", "Gengar", "Ditto", 
  "Eevee", "Snorlax"
];

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(0); // Index of Pokémon
  const [correctGuess, setCorrectGuess] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [input, setInput] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleGuessSubmit = () => {
    if (!input.trim()) return; // Prevent empty submission

    const guess = input.trim().toLowerCase();
    const pokemonName = POKEMONS[currentPokemon].toLowerCase();

    if (guess === pokemonName) {
      setCorrectGuess(true); // Correct guess
    } else {
      setIncorrectGuesses((prev) => {
        const newGuesses = prev + 1;
        if (newGuesses >= 3) setGameOver(true);
        return newGuesses;
      });
    }
    setInput(''); // Clear input field
  };

  const handleNextPokemon = () => {
    if (currentPokemon < POKEMONS.length - 1) {
      setCurrentPokemon((prev) => prev + 1);
      setCorrectGuess(false);
    } else {
      setGameOver(true); // End of game
    }
  };

  const handleNewGame = () => {
    setCurrentPokemon(0);
    setCorrectGuess(false);
    setIncorrectGuesses(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <PokemonDisplay 
        pokemonIndex={currentPokemon} 
        revealed={correctGuess} 
      />
      <GuessCounter incorrectGuesses={incorrectGuesses} />
      <GuessInput 
        input={input} 
        onInputChange={setInput} 
        onSubmit={handleGuessSubmit}
        buttonState={gameOver ? "New Game" : correctGuess ? "Next" : "Submit"}
        onButtonClick={gameOver ? handleNewGame : correctGuess ? handleNextPokemon : handleGuessSubmit}
      />
    </div>
  );
}

export default App;
