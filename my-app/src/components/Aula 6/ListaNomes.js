import React from 'react';

const ListaDeNomes = () =>{
    const nomes = ['Ana', 'Bruno', 'Carlos', 'Felipe']

    return(
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ul>
    )
}

export default ListaDeNomes;