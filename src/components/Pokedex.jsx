
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

      
      
    //   const fetchPokemon = async () => {
    //     try {
    //       const response = await fetch(generationEndpoints[selectedGeneration]);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setPokemonList(data.results);
    //     } catch (error) {
    //       console.error('Failed to fetch:', error);
    //     }
    //   }
    //   fetchPokemon();
    // }, [selectedGeneration]);
      
    const filteredPokemonList = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="pokedex">
      {/* {pokemonList.map((pokemon, index) => */}
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


// import React, { useState, useEffect } from 'react';
// import Pokemon from './Pokemon';
// import './Pokedex.css';

// const allPokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10277';

// const Pokedex = ({ selectedGeneration, setSelectedPokemon, searchTerm }) => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAllPokemon = async () => {
//       try {
//         const response = await fetch(allPokemonEndpoint);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Fetch details for each Pokémon species to get generation info
//         const pokemonDetailsPromises = data.results.map(pokemon =>
//           fetch(pokemon.url).then(res => res.json())
//         );
//         const pokemonDetails = await Promise.all(pokemonDetailsPromises);

//         const pokemonSpeciesPromises = pokemonDetails.map(pokemon =>
//           fetch(pokemon.species.url).then(res => res.json())
//         );
//         const pokemonSpeciesDetails = await Promise.all(pokemonSpeciesPromises);

//         // Add generation info to each Pokémon
//         const detailedPokemonList = pokemonDetails.map((pokemon, index) => ({
//           ...pokemon,
//           generation: pokemonSpeciesDetails[index].generation.name,
//         }));

//         setPokemonList(detailedPokemonList);
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch:', error);
//       }
//     };

//     fetchAllPokemon();
//   }, []);

//   // Filter by generation if selected
//   const filteredPokemonList = pokemonList.filter(pokemon => {
//     if (selectedGeneration === 'all') {
//       return true;
//     }
//     return pokemon.generation === `generation-${selectedGeneration}`;
//   }).filter(pokemon =>
//     pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="pokedex">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         filteredPokemonList.map((pokemon, index) => (
//           <Pokemon
//             key={index}
//             name={pokemon.name}
//             url={pokemon.url}
//             onClick={() => setSelectedPokemon(pokemon)}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default Pokedex;
