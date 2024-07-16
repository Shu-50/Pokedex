import React, { useState, useEffect } from 'react';
import './Pokemon.css';

const Pokemon = ({ name, url, onClick  }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemonData(data));
  }, [url]);

//   const fetchPokemonData = async () => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setPokemonData(data);
//     } catch (error) {
//       console.error('Failed to fetch:', error);
//     }
//   };

//   fetchPokemonData();
// }, [url]);

  return (
    <div className="pokemon-card"  onClick={onClick} >
      {pokemonData && (
        <>
          <img 
          // src={pokemonData.sprites.front_default} 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
          alt={name} />
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
          <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </>
      )}
    </div>
  );
};

export default Pokemon;
