import React from "react";

interface BotaoCircularProps {
  texto: string;
  diametro: string;
  fontSize: string;
  fontWeight: string;
}

const BotaoCircular: React.FC<BotaoCircularProps> = ({ texto, diametro, fontSize, fontWeight }) => {
  const estiloBotao: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    width: diametro,
    height: diametro,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize:fontSize,
    fontWeight:fontWeight,
  };

  return <div style={estiloBotao}>{texto}</div>;
};

export default BotaoCircular;
