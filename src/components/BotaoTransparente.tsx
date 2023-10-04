import React from "react";

interface BotaoTransparenteProps {
  texto: string;
  ativado: boolean;
}

const BotaoTransparente: React.FC<BotaoTransparenteProps> = ({ texto, ativado }) => {
  const estiloBotao = {
    width: "244px",
    height: "38px",
    borderRadius: "58px",
    border: "1px solid #FFF",
    background: "rgba(0, 0, 0, 0.80)",
    boxShadow: "0px 4px 4px 0px #000",
    color: ativado ? "#FFF" : "#828282", // Cor da fonte com base na prop "ativado"
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <button style={estiloBotao}>
      {texto}
    </button>
  );
};

export default BotaoTransparente;
