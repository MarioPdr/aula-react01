import React from 'react';

function DogCards({ imageUrl, error }) {
  return (
    <div className='app'>
      <h1>Dog API Card</h1>
      <div className='card'>
        {error ? <p>Erro ao carregar imagem do cachorro.</p> : 
            <div>
              <img src={imageUrl} alt='Random Dog' className='dog-image' />
              <div className='card-content'></div>
              <h2>Random Dog</h2>
              <p>Este é um cachorro gerado aleatoriamente</p>
            </div>
        }
      </div>
    </div>
  );
}

export default DogCards;
