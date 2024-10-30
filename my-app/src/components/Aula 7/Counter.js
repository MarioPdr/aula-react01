import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return (
        <div>
            <h1>Contagem: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );

}

export default Counter;