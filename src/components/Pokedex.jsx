
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';


const generationEndpoints = {
  all: 'https://pokeapi.co/api/v2/pokemon?limit=10277',
  // all: 'https://pokeapi.co/api/v2/pokemon?limit=1302',
  1: 'https://pokeapi.co/api/v2/pokemon?limit=151',
  2: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
  3: 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
  4: 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
  5: 'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156',
  6: 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72',
  7: 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88',
  8: 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96',
  9: 'https://pokeapi.co/api/v2/pokemon?offset=906&limit=9371',
};


const Pokedex = ({ selectedGeneration, setSelectedPokemon, searchTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // // fetch('https://pokeapi.co/api/v2/pokemon')
    fetch(generationEndpoints[selectedGeneration])  
    .then(response => response.json())
      .then(data => setPokemonList(data.results));
      // console.log(pokemonList)
  }, [selectedGeneration]);


      
    const filteredPokemonList = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="pokedex">
  
       {filteredPokemonList.map((pokemon, index) => (
          <Pokemon key={index}
                 name={pokemon.name}
                 url={pokemon.url} 
                 onClick={() => setSelectedPokemon(pokemon)}
           />
      ))}
    </div>
  );
};

export default Pokedex;
