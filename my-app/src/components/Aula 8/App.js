import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Aula 8/Home";
import About from "./components/Aula 8/About";

const App = () => {
  return (

      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

  );
};

export default App;
