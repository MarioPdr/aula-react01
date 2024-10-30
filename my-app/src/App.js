import React from "react";
//import { Provider } from "react-redux";
//import  store  from "./components/Aula 7 (parte 1)/store";
//import Counter from "./components/Aula 7 (parte 1)/Counter";
import StyledButton from "./components/Aula 7/StyledButton";
import ProgressCircle from "./components/Aula 7/ProgressCircle";
import { CircularProgress } from "@mui/material";

export const App = () => {
  return (
    //<Provider store={store}>
    //  <Counter />
    // </Provider>


    // 
    <div>
      <StyledButton />
      <CircularProgress />
    </div>

  );
}

export default App;