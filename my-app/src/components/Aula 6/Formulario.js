import React from 'react';

const Formulario = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados Enviados:', inputValue);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <button type='submit'>Enviar</button>
            <div>{inputValue}</div>
        </form>
    )
}

export default Formulario;