import React from "react";

const FormularioComValidacao = () => {
    const [email, setEmail] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [error, setError] = React.useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeCpf = (e) => {
        setCpf(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Email inválido');
        } else {
            setError('');
            console.log('Email enviado:', email);
        }
        if (cpf.length !== 14 || !cpf.includes('.') || !cpf.includes('-')) {
            setError('CPF inválido');
        } else {
            setError('');
            console.log('CPF enviado:', cpf);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleChangeEmail} placeholder="Email" />
            <input type="text" value={cpf} onChange={handleChangeCpf} placeholder="CPF" />
            {error && <span>{error}</span>}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioComValidacao;
