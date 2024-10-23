import React from 'react';
import InputComponent from './InputComponent';
const FormularioPai = () =>{
    const [formData, setFormData] = React.useState({ name:'', email: '' });

    const handleCahnge = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <InputComponent
                label='name'
                name="name"
                value={formData.name}
                onChange={handleCahnge}
             />

            <InputComponent 
                label='email'
                name="email"
                value={formData.email} 
                onChange={handleCahnge}
             />
        </div>
    );

};

export default FormularioPai;