import React from 'react';
import InputComponent from './InputComponent';
const FormularioPai = () =>{
    const [formData, setFormData] = React.useState({ name:'', email: '' });

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <InputComponent
                label='name'
                name="name"
                value={formData.name}
                onChange={handleChange}
             />

            <InputComponent 
                label='email'
                name="email"
                value={formData.email} 
                onChange={handleChange}
             />
        </div>
    );

};

export default FormularioPai;