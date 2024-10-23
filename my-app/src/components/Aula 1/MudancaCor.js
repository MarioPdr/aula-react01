// Crie um arquivo chamado MudancaCor.js.
// O componente deve:
// Usar o useState para manter a cor de fundo.
// Ter um botão que, ao ser clicado, muda a cor de fundo para uma cor aleatória.


import React, { useState } from 'react';

const MudancaCor = () => {
  const [cor, setCor] = useState('white');

  const cores = ['red', 'green', 'blue', 'yellow', 'purple'];

  const mudarCor = () => {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const novaCor = cores[indiceAleatorio];
    setCor(novaCor);
  };

  return (
    <div style={{ backgroundColor: cor }}>
      <button onClick={mudarCor}>Mudar Cor</button>
    </div>
  );
};

export default MudancaCor;