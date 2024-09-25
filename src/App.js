import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import PersonagemForm from "./components/Personagem/PersonagemForm";
import PersonagemList from "./components/Personagem/PersonagemList";
import JogadorForm from "./components/Jogador/JogadorForm";
import JogadorList from "./components/Jogador/JogadorList";
import BatalhaForm from "./components/Batalha/BatalhaForm";
import BatalhaList from "./components/Batalha/BatalhaList";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagem-form" element={<PersonagemForm />} />
          <Route path="/personagem-list" element={<PersonagemList />} />
          <Route path="/jogador-form" element={<JogadorForm />} />
          <Route path="/jogador-list" element={<JogadorList />} />
          <Route path="/batalha-form" element={<BatalhaForm />} />
          <Route path="/batalha-list" element={<BatalhaList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
