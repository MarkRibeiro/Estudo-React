import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotaoTransparente from "./BotaoTransparente";
import CartasEmLinha from "./CartasEmLinha";
import BotaoCircular from "./BotaoCircular";

import teste from "../imgs/botaoCircular1.png";

interface CartasEBotaoProps {
  cartas: { corBorda: string; texto: string }[];
  rotacao?: number;
  textoBotao: string;
  ativadoBotao: boolean;
  onBotaoCircularClick: () => void;
  onCartaClick: (index: number) => void; // Update the type to accept an index
}

const CartasEBotao: React.FC<CartasEBotaoProps> = ({ cartas, rotacao = 0, textoBotao, onBotaoCircularClick, onCartaClick }) => {
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCartaClick = (index: number) => {
    setCartaSelecionada(index);
    onCartaClick(index); // Pass the index to the parent component
  };

  const handleBotaoClick = () => {
    navigate('/jogo');
  }


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        transform: `rotate(${rotacao}deg)`,
        height: "100vw",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <BotaoCircular diametro="40px" imagemSrc={teste} aplicarBoxShadow={true} onClick={onBotaoCircularClick} />
      </div>
      <CartasEmLinha cartas={cartas} rotacao={rotacao} onCartaClick={handleCartaClick} />
      <BotaoTransparente texto={textoBotao} ativado={cartaSelecionada !== null} onClick={handleBotaoClick} />
    </div>
  );
};

export default CartasEBotao;