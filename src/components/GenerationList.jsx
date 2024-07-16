import React from 'react';
import './GenerationList.css';

const generations = [
  { id: 'all', name: 'All Pokémon' },
  { id: 1, name: 'Generation I' },
  { id: 2, name: 'Generation II' },
  { id: 3, name: 'Generation III' },
  { id: 4, name: 'Generation IV' },
  { id: 5, name: 'Generation V' },
  { id: 6, name: 'Generation VI' },
  { id: 7, name: 'Generation VII' },
  { id: 8, name: 'Generation VIII' },
  { id: 9, name: 'Generation IX' },
];

const GenerationList = ({ setSelectedGeneration }) => {
  return (
    <div className="generation-list">
      <h2>Generations</h2>
      <ul>
        {generations.map(gen => (
          <li key={gen.id} onClick={() => setSelectedGeneration(gen.id)}>
            {gen.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenerationList;
