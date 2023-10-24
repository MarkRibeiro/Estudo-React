import React from "react";

interface BotaoCircularProps {
  diametro: string;
  imagemSrc: string;
  aplicarBoxShadow: boolean;
  onClick: () => void;
}

const BotaoCircular: React.FC<BotaoCircularProps> = ({ diametro, imagemSrc, aplicarBoxShadow, onClick }) => {
  const estiloBotao: React.CSSProperties = {
    width: diametro,
    height: diametro,
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: aplicarBoxShadow ? "0px 4px 4px rgba(0, 0, 0, 0.65)" : "none",
  };

  return (
    <div style={estiloBotao} onClick={onClick}>
      <img src={imagemSrc} alt="Imagem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
};

export default BotaoCircular;
