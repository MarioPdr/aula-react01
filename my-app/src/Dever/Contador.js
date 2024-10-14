import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Contador = ({ count, incrementar, decrementar }) => {
  useEffect(() => {
    console.log(`A contagem mudou para: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Contagem no Filho: {count}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

Contador.propTypes = {
  count: PropTypes.number.isRequired,
  incrementar: PropTypes.func.isRequired,
  decrementar: PropTypes.func.isRequired,
};

export default Contador;
