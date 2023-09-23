import React from "react";
import Imagem from "./Imagem";
import BotaoCircular from "./BotaoCircular";
import CaixaNumerica from "./CaixaNumerica";

interface ContadorFichaProps {
  imagemSrc: string;
  numero: number;
}

const ContadorFicha: React.FC<ContadorFichaProps> = ({ imagemSrc, numero }) => {
  const estiloContador: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={estiloContador}>
      <Imagem src={imagemSrc} altura="79px" largura="79px" />
      <BotaoCircular texto="-" />
      <CaixaNumerica numero={numero} />
      <BotaoCircular texto="+" />
    </div>
  );
};

export default ContadorFicha;
