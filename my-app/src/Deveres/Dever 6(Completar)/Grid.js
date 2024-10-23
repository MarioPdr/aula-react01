import React, { useState } from 'react';
import Personagem from './Personagem';
import './Grid.css';

function Grid() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRandomCharacter = () => {
        const randomId = Math.floor(Math.random() * 83) + 1; // API tem 83 personagens
        setLoading(true);
        setError(null);
        fetch(`https://swapi.dev/api/people/${randomId}/`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
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
            <div className="grid">
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p>Erro ao carregar personagem</p>
                ) : (
                    character && <Personagem character={character} />
                )}
            </div>
        </div>
    );
}

export default Grid;
