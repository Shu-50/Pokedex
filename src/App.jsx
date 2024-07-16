import React from 'react';
import { useState } from 'react';
import Pokedex from './components/Pokedex';
import GenerationList from './components/GenerationList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState('all');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <div className="header">
        <span>Pokedex</span>
     
         <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="container">
        <GenerationList setSelectedGeneration={setSelectedGeneration} />
        <Pokedex
          selectedGeneration={selectedGeneration}
          setSelectedPokemon={setSelectedPokemon}
          searchTerm={searchTerm} />

        {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}

      </div>
    </div>
  );
}

export default App;
