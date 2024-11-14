import React, { useState } from "react";

const ToggleButton = () =>{
    const [text, setText] = useState("Clique para alterar");
    return <button onClick={ () => setText("Texto alterado!")}>{text}</button>
}

export default ToggleButton;