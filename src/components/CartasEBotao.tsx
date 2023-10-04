import React from "react";
import BotaoTransparente from "./BotaoTransparente";
import CartasEmLinha from "./CartasEmLinha";
import BotaoCircular from "./BotaoCircular";

import teste from "../imgs/botaoCircular1.png";

interface CartasEBotaoProps {
  cartas: { corBorda: string; texto: string }[];
  rotacao?: number;
  textoBotao: string;
  ativadoBotao: boolean;
}

const CartasEBotao: React.FC<CartasEBotaoProps> = ({ cartas, rotacao = 0, textoBotao, ativadoBotao }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around", // Alinhe os elementos no canto inferior
        transform: "rotate(90deg)",
        height: "100vw", // Defina a altura para ocupar toda a altura da tela
      }}
    >
      <div style = {{display: "flex", width: "100%"}}>
        <BotaoCircular diametro="40px" imagemSrc={teste} aplicarBoxShadow={true} />
      </div>
      <CartasEmLinha cartas={cartas} rotacao={rotacao} />
      <BotaoTransparente texto={textoBotao} ativado={ativadoBotao} />
    </div>
  );
};

export default CartasEBotao;
