import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } 
from 'react-router-dom';
import Home from './components/Aula 8/Home';
import Users from './components/Aula 8/Users';
import UserDetail from './components/Aula 8/UserDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />}>
            {/* Rota Aninhada - usando parametros na URL */}
            <Route path=":userId" element={<UserDetail />} />
          </Route>
          {/* Redirecionamento em caso de rota vazia ou não
          existente */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
