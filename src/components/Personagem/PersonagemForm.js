import React, { useState } from "react";
import axios from "axios";

const PersonagemForm = () => {
  const [tipo, setTipo] = useState("");
  const [qtdVidas, setQtdVidas] = useState(0);
  const [poder, setPoder] = useState(0);
  const [defesa, setDefesa] = useState(0);
  const [agilidade, setAgilidade] = useState(0);
  const [qtdDado, setQtdDado] = useState(0);
  const [totalFaces, setTotalFaces] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const personagem = { tipo, qtdVidas, poder, defesa, agilidade, qtdDado, totalFaces };

    axios.post("http://localhost:8081/personagem", personagem)
      .then(response => {
        console.log("Personagem criado com sucesso!", response.data);
        setTipo("");
        setQtdVidas(0);
        setPoder(0);
        setDefesa(0);
        setAgilidade(0);
        setQtdDado(0);
        setTotalFaces(0);
      })
      .catch(error => {
        console.error("Houve um erro ao criar o personagem!", error);
      });
  };

  return (
    <div className="container mt-5">
      <a href="/" type="button" class="btn btn-success">Página Inicial</a><br/><br/>
      <h2 className="mb-4">Criar Personagem</h2>
      <form className="container" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <div className="form-group">
          <label>Tipo de Personagem:</label>
          <input 
            type="text" 
            className="form-control" 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Quantidade de Vidas:</label>
          <input 
            type="number" 
            className="form-control" 
            value={qtdVidas} 
            onChange={(e) => setQtdVidas(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Poder:</label>
          <input 
            type="number" 
            className="form-control" 
            value={poder} 
            onChange={(e) => setPoder(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Defesa:</label>
          <input 
            type="number" 
            className="form-control" 
            value={defesa} 
            onChange={(e) => setDefesa(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Agilidade:</label>
          <input 
            type="number" 
            className="form-control" 
            value={agilidade} 
            onChange={(e) => setAgilidade(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Quantidade de Dados:</label>
          <input 
            type="number" 
            className="form-control" 
            value={qtdDado} 
            onChange={(e) => setQtdDado(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <div className="col-md-6">
        <div className="form-group">
          <label>Total de Faces dos Dados:</label>
          <input 
            type="number" 
            className="form-control" 
            value={totalFaces} 
            onChange={(e) => setTotalFaces(parseInt(e.target.value))} 
          />
        </div>
        </div><br/>
        <button type="submit" className="btn btn-primary">Criar Personagem</button>
      </form><br/><br/>
    </div>
  );
};

export default PersonagemForm;
