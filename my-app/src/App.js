import './App.css';
import ListaDeNomes from './components/Aula 6/ListaNomes';
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
      {/* <Greeting name='Pedro' age={23} telephone='99999-9999' address='dasdasda, 230, RJ' isStudent={true} /> */}
      <ListaDeNomes />
      </div>
    )
  } 

export default App;



