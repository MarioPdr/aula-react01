import React, { useState } from 'react';
import Contador from './Contador';

const Paicontador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contagem no Pai: {count}</h1>
      <Contador count={count} incrementar={incrementar} decrementar={decrementar} />
    </div>
  );
}

export default Paicontador;
