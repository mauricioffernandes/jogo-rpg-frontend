import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonagemList from "./components/Personagem/PersonagemList";
import PersonagemForm from "./components/Personagem/PersonagemForm";

const App = () => {
  return (
    <div>
      <h1> Jogo RPG - Gerenciamento de Personagens</h1>
      <PersonagemForm />
      <PersonagemList />
    </div>
  );
};

export default App;


