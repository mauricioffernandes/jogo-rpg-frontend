import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 

const PersonagemList = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/personagem")
      .then(response => {
        console.log(response.data);
        setPersonagens(response.data);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os personagens!", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Personagens</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Tipo</th>
            <th>Qtd Vidas</th>
            <th>Poder</th>
            <th>Defesa</th>
            <th>Agilidade</th>
            <th>Qtd Dado</th>
            <th>Total Faces</th>
          </tr>
        </thead>
        <tbody>
          {personagens.map((personagem) => (
            <tr key={personagem.id}>
              <td>{personagem.tipo}</td>
              <td>{personagem.qtdVidas}</td>
              <td>{personagem.poder}</td>
              <td>{personagem.defesa}</td>
              <td>{personagem.agilidade}</td>
              <td>{personagem.qtdDado}</td>
              <td>{personagem.tolalFaces}</td>
            </tr>
          ))}
        </tbody>
      </table><br/>
    </div>
  );
};

export default PersonagemList;
