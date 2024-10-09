import React, { useState } from 'react';

const ExibirNome = () => {
  const [nome, setTexto] = useState("");

  const exibirNome = () => {
    if (nome === "") {
        setTexto("João");
    } else {
        setTexto("");
    };
  };

  return (
    <div>
      <h1>Nome: {nome}</h1>
      <button onClick={exibirNome}>ExibirNome</button>
    </div>
  );
};

export default ExibirNome;