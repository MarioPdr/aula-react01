import React from "react";

const InputComponent = ({ label, name, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default InputComponent;