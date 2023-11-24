import React, { useState } from "react";
import Carta from "./Carta";

interface CartasEmLinhaProps {
  cartas: { corBorda: string; texto: string }[];
  rotacao?: number;
  onCartaClick: (index: number) => void;
}

const CartasEmLinha: React.FC<CartasEmLinhaProps> = ({ cartas, rotacao = 0, onCartaClick }) => {
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cartaStyle = {
    marginRight: "25px",
  };

  const handleCartaClick = (index: number) => {
    if (index === cartaSelecionada) {
      // Se a mesma carta foi clicada novamente, desselecione
      setCartaSelecionada(null);
    } else {
      setCartaSelecionada(index);
    }

    onCartaClick(index); // Propagar o evento para o componente pai
  };

  return (
    <div style={containerStyle}>
      {cartas.map((carta, index) => (
        <div key={index} style={index < cartas.length - 1 ? cartaStyle : undefined}>
          <Carta
            corBorda={carta.corBorda}
            texto={carta.texto}
            onCartaClick={() => handleCartaClick(index)}
            selecionada={index === cartaSelecionada}
          />
        </div>
      ))}
    </div>
  );
};

export default CartasEmLinha;
