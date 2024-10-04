import React from "react";

const Saudacao = (props) => {
    return(
        <div>
            <h1> Olá, {props.nome} {props.sobrenome}! </h1>
        </div>
    )
}

export default Saudacao;