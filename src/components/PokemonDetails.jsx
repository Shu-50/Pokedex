import React, { useState, useEffect } from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => setPokemonData(data));
  }, [pokemon.url]);

  return (
    <div className="pokemon-details">
      {pokemonData && (
        <>
          <img
            // src={pokemonData.sprites.front_default} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
            alt={pokemon.name} className="large-image" />
          <div>

            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
