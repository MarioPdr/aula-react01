import './App.css';
import Home from './components/Home';
import Contador from './components/Contador';
import TrocaTexto from './components/TrocaTexto';
import ExibirNome from './components/ExibirNome';
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
         <Home />
         <Contador />
         <TrocaTexto />
         <ExibirNome />
      </div>
    )
  } 
// DEVER DE CASA: FAZER UM COMPONENTE QUE RECEBA OS DADOS DO COMPONENTE PAI,
// SENDO Q VAI RETORNAR UMA SOMA DOS DADOS, OU SEJA, USE PROPS E SOME-AS
export default App;
