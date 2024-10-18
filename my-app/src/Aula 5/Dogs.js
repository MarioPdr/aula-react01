import React, { useState, useEffect } from 'react';
import DogCards from './DogCards';

function Dogs() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')  
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        console.error('Erro ao buscar imagem de cachorro', error);
        setError(true);  
        setLoading(false); 
      });
  }, []);

  return (
    <div className='app'>
      {loading ? <p>Loading...</p> : <DogCards imageUrl={dogImage} error={error} />}
    </div>
  );
};

export default Dogs;
