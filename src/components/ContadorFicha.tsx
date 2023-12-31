import React, { useState } from "react";
import Imagem from "./Imagem";
import BotaoCircular from "./BotaoCircular";
import CaixaNumerica from "./CaixaNumerica";

import menos from "../imgs/botaoCircular2.png";
import mais from "../imgs/botaoCircular3.png";

interface ContadorFichaProps {
  imagemSrc: string;
  numero: number;
}

const ContadorFicha: React.FC<ContadorFichaProps> = ({ imagemSrc, numero }) => {
  const [contador, setContador] = useState(numero);

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

  const incrementarNumero = () => {
    setContador(contador + 1);
  };

  const decrementarNumero = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={estiloContador}>
      <Imagem src={imagemSrc} altura="79px" largura="79px" />
      <BotaoCircular diametro="30px" imagemSrc={menos} aplicarBoxShadow={false} onClick={decrementarNumero} />
      <div style={estiloCaixaNumerica}>
        <CaixaNumerica numero={contador} />
      </div>
      <BotaoCircular diametro="30px" imagemSrc={mais} aplicarBoxShadow={false} onClick={incrementarNumero} />
    </div>
  );
};

export default ContadorFicha;
