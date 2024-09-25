import React from "react";

const BatalharForm = () => {
  const iniciarBatalha = () => {
    console.log("Batalha iniciada!");
  };

  return (
    <div>
      <h2>Iniciar Batalha</h2>
      <button onClick={iniciarBatalha} className="btn btn-danger">
        Começar Batalha
      </button>
    </div>
  );
};

export default BatalharForm;
