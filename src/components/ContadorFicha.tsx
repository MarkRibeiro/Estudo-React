import React from "react";
import Imagem from "./Imagem";
import BotaoCircular from "./BotaoCircular";
import CaixaNumerica from "./CaixaNumerica";

interface BotaoCircularCustomProps {
  texto: string;
  diametro: string;
  fontSize: string;
  fontWeight: string;
}

const BotaoCircularCustom: React.FC<BotaoCircularCustomProps> = ({
  texto,
  diametro,
  fontSize,
  fontWeight,
}) => {
  const estiloBotao: React.CSSProperties = {
    width: diametro,
    height: diametro,
    borderRadius: "50%", // Torna o botão circular
    backgroundColor: "black", // Define a cor de fundo como preto
    color: "white", // Define a cor do texto como branco
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: diametro, // Alinha o texto verticalmente no centro
  };

  return <div style={estiloBotao}>{texto}</div>;
};

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

  const estiloCaixaNumerica: React.CSSProperties = {
    width: "62px",
    height: "43px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
  };

  return (
    <div style={estiloContador}>
      <Imagem src={imagemSrc} altura="79px" largura="79px" />
      <BotaoCircularCustom
        texto="-"
        diametro="30px"
        fontSize="22px"
        fontWeight="bold"
      />
      <div style={estiloCaixaNumerica}>
        <CaixaNumerica numero={numero} />
      </div>
      <BotaoCircularCustom
        texto="+"
        diametro="30px"
        fontSize="22px"
        fontWeight="bold"
      />
    </div>
  );
};

export default ContadorFicha;
