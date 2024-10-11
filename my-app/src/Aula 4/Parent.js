import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [message, setMessage] = useState('No interaction yet');
  
    const handleClick = () => {
      setMessage('Button was clicked!');
    };
  
    return (
      <div>
        <h1>{message}</h1>
        <Child onButtonClick={handleClick} />
      </div>
    );
  };

  export default Parent;