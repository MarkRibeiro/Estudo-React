import React from "react";

interface BotaoCircularProps {
  texto: string;
}

const BotaoCircular: React.FC<BotaoCircularProps> = ({ texto }) => {
  const estiloBotao: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return <div style={estiloBotao}>{texto}</div>;
};

export default BotaoCircular;
