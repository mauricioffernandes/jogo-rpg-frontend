import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Bem-vindo ao Sistema de Gerenciamento</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Personagem</h3>
          <Link to="/personagem-form" className="btn btn-primary mb-2">
            Adicionar Personagem
          </Link>
          <br />
          <Link to="/personagem-list" className="btn btn-secondary">
            Ver Lista de Personagens
          </Link>
        </div>

        <div className="col-md-4">
          <h3>Jogador</h3>
          <Link to="/jogador-form" className="btn btn-primary mb-2">
            Adicionar Jogador
          </Link>
          <br />
          <Link to="/jogador-list" className="btn btn-secondary">
            Ver Lista de Jogadores
          </Link>
        </div>

        <div className="col-md-4">
          <h3>Batalha</h3>
          <Link to="/batalhar-form" className="btn btn-primary mb-2">
            Iniciar Batalha
          </Link>
          <br />
          <Link to="/batalha-list" className="btn btn-secondary">
            Ver Lista de Batalhas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
