import React, { useEffect, useState } from "react";
import axios from "axios";

const JogadorList = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/jogador")
      .then((response) => {
        setJogadores(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogadores!", error);
      });
  }, []);

  return (
    <div>
       <a href="/" type="button" class="btn btn-success">Página Inicial</a><br/><br/>
      <h2>Lista de Jogadores</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Vidas</th>
            <th>Poder</th>
            <th>Defesa</th>
            <th>Agilidade</th>
            <th>Total dados</th>
            <th>Total faces</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map((jogador) => (
            <tr key={jogador.id}>
              <td>{jogador.nome}</td>
              <td>{jogador.personagem.tipo}</td>
              <td>{jogador.personagem.qtdVidas}</td>
              <td>{jogador.personagem.poder}</td>
              <td>{jogador.personagem.defesa}</td>
              <td>{jogador.personagem.agilidade}</td>
              <td>{jogador.personagem.qtdDado}</td>
              <td>{jogador.personagem.tolalFaces}</td>  
              <td>{jogador.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JogadorList;