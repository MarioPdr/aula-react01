import React, { useState } from 'react';

const TrocaTexto = () => {
  const [texto, setTexto] = useState("Texto Original");

  const trocarTexto = () => {
    if (texto === "Texto Original") {
        setTexto("Texto Alterado");
    } else {
        setTexto("Texto Original");
    };
  };

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={trocarTexto}>Trocar Texto</button>
    </div>
  );
};

export default TrocaTexto;