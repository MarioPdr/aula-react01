import React, { useState, useEffect } from 'react';
import Personagem from './Personagem';
import './Grid.css';

function Grid() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        console.error('Erro ao buscar personagens', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const renderCharacters = () => {
    const characterElements = [];
    for (let i = 0; i < characters.length; i++) {
      characterElements.push(
        <Personagem character={characters[i]} />
      );
    }
    return characterElements;
  };

  return (
    <div className="grid">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Erro ao carregar personagens</p>
      ) : (
        renderCharacters()
      )}
    </div>
  );
}

export default Grid;
