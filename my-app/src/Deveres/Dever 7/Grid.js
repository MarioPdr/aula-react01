import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Personagem from './Personagem';
import './Grid.css';

function Grid() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const fetchRandomCharacter = () => {
        const randomId = Math.floor(Math.random() * 83) + 1;
        setLoading(true);
        setError(null);
        fetch(`https://swapi.dev/api/people/${randomId}/`)
            .then(response => response.json())
            .then(data => {
                setCharacters([...characters, data]);
                dispatch({ type: 'INCREMENT' });
                setLoading(false);
                setError(false);
            })
            .catch(error => {
                console.error('Erro ao buscar personagem', error);
                setError(true);
                setLoading(false);
            });
    };

    return (
        <div className="grid-container">
            <button onClick={fetchRandomCharacter}>Buscar Personagem Aleatório</button>
            {loading && <CircularProgress />}
            {error && <p>Erro ao carregar personagem</p>}
            <div className="grid">
                {characters.map((character, index) => (
                    <Personagem key={index} character={character} />
                ))}
            </div>
        </div>
    );
}

export default Grid;
