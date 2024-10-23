import React from "react";
import Saudacao from "./Saudacao";
import Soma from "./Soma";

const Home = () => {
    return (
        <div>
            <Saudacao nome="Pedro" sobrenome="Silva" />
            <Soma n1={3} n2={5} />
        </div>
    );
}

export default Home;