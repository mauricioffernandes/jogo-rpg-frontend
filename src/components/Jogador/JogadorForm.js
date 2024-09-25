import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JogadorForm = () => {
  const [nome, setNome] = useState('');
  const [personagemId, setPersonagemId] = useState('');
  const [personagens, setPersonagens] = useState([]);
  const [saldo, setSaldo] = useState(0); 


  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const response = await axios.get('http://localhost:8081/personagem'); 
        setPersonagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar personagens', error);
      }
    };

    fetchPersonagens();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const novoJogador = {
        id: 0, 
        createdAt: new Date().toISOString(), 
        nome: nome,
        personagem: {
          id: parseInt(personagemId, 10), 
          tipo: '',
          qtdVidas: 0,
          poder: 0,
          defesa: 0,
          agilidade: 0,
          qtdDado: 0,
          totalFaces: 0
        },
        saldo: saldo 
      };
      
      await axios.post('http://localhost:8081/jogador', novoJogador); 
      
      setNome('');
      setPersonagemId('');
      setSaldo(0);
    } catch (error) {
      console.error('Erro ao criar jogador', error);
      alert('Erro ao criar jogador');
    }
  };

  return (
    <div className="container mt-5">
       <a href="/" type="button" class="btn btn-success">Página Inicial</a><br/><br/>
      <h2 className="mb-4">Criar Jogador</h2>
    <form className="container" onSubmit={handleSubmit}>
    <div className="col-md-6">
      <div className="form-group">
        <label>Nome do Jogador :</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required
          />
          </div>
        </div><br/>
      
      <div className="col-md-6">
        <div className="form-group">
        <label>Tipo personagem :</label>
        <select 
          value={personagemId} 
          onChange={(e) => setPersonagemId(e.target.value)} 
          required
        >
          <option value="">Selecione um personagem</option>
          {personagens.map(personagem => (
            <option key={personagem.id} value={personagem.id}>
              {personagem.nome} (ID: {personagem.id})
            </option>
          ))}
        </select>
        </div>
        </div><br/>
      <div className="col-md-6">
        <div className="form-group">
        <label>Valor saldo inicial :</label>
        <input 
          type="number" 
          value={saldo} 
          onChange={(e) => setSaldo(e.target.value)} 
          min="0" 
          required
          />
          </div>
        </div><br/>
      <button type="submit" className="btn btn-primary">Criar Jogador</button>
    </form><br/><br/>
    </div>
  );
};

export default JogadorForm;
