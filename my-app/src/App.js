import React from "react";
import { Provider } from "react-redux";
import store from "./Deveres/Dever 7/store";
import Counter from "./Deveres/Dever 7/Counter"; 
import Grid from "./Deveres/Dever 7/Grid"; 

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter /> 
        <Grid />
      </div>
    </Provider>
  );
};

export default App;
