import React, { useState, useEffect } from "react";
import axios from "axios";

const BatalhaList = () => {
  const [batalhas, setBatalhas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/batalha")
      .then((response) => {
        setBatalhas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar batalhas!", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Batalhas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Jogador</th>
            <th>Personagem</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {batalhas.map((batalha) => (
            <tr key={batalha.id}>
              <td>{batalha.jogadorNome}</td>
              <td>{batalha.personagemTipo}</td>
              <td>{batalha.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table><br/>
    </div>
  );
};

export default BatalhaList;
