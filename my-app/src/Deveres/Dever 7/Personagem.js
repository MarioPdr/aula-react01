import React from 'react';

function Personagem({ character }) {
  const { name, height, mass, hair_color, skin_color } = character;

  return (
    <div className="personagem-card">
      <h2>{name}</h2>
      <p><strong>Altura:</strong> {height} cm</p>
      <p><strong>Peso:</strong> {mass} kg</p>
      <p><strong>Cor do cabelo:</strong> {hair_color}</p>
      <p><strong>Cor da pele:</strong> {skin_color}</p>
    </div>
  );
}

export default Personagem;
