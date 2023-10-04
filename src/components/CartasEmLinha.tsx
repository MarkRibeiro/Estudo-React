import React from "react";
import Carta from "./Carta";

interface CartasEmLinhaProps {
  cartas: { corBorda: string; texto: string }[];
  rotacao?: number;
}

const CartasEmLinha: React.FC<CartasEmLinhaProps> = ({ cartas, rotacao = 0 }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cartaStyle = {
    marginRight: "25px", // Margem direita entre as cartas (exceto a última)
  };

  return (
    <div style={containerStyle}>
      {cartas.map((carta, index) => (
        <div key={index} style={index < cartas.length - 1 ? cartaStyle : undefined}>
          <Carta corBorda={carta.corBorda} texto={carta.texto} />
        </div>
      ))}
    </div>
  );
};

export default CartasEmLinha;
