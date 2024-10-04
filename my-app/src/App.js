import './App.css';
import Home from './Home';
import Soma from './Soma';
// import HelloWorld from './HelloWorld';
// import HelloWorld2 from './HelloWorld2';
// import TesteClasse from './TesteClasse';
// import TesteFuncao from './TesteFuncao';

/*
function App() {
  return (
    <div className="App">
        <HelloWorld/>
        <HelloWorld2/>
    </div>
  );
} */
/*
const App = () => {
  return(
    <div>
       <TesteClasse />
       <TesteFuncao />
    </div>
  )
} */

  const App = () => {
    return(
      <div>
         <Home/>
         <Soma n1={3} n2={5} />
      </div>
    )
  } 

export default App;
