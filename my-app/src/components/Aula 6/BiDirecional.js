import React, {useState} from 'react'
const BindingBidirecional = () => {
    const [nome, setNome] = useState('');
  
    const handleChange = (e) => {
      setNome(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={nome} onChange={handleChange} />
        <p>Nome digitado: {nome}</p>
      </div>
    );
  }
  export default BindingBidirecional