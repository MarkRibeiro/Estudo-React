import React from "react";

interface CartaProps {
  corBorda: string;
  texto: string;
  onCartaClick: () => void;
  selecionada: boolean;
}

const Carta: React.FC<CartaProps> = ({ corBorda, texto, onCartaClick, selecionada }) => {
  const alturaElevacao = selecionada ? "30px" : "0"; // Altura de elevação quando a carta está selecionada

  const estiloCarta: React.CSSProperties = {
    width: "126px",
    height: "192px",
    backgroundColor: selecionada ? corBorda : "white", // Aplica a cor apenas quando a carta está selecionada
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    transition: "height 0.3s ease", // Adiciona uma transição suave à altura
    transform: `translateY(-${alturaElevacao})`, // Move a carta para cima com base na altura de elevação
  };

  const estiloTexto: React.CSSProperties = {
    color: "black",//selecionada ? "white" : "black", // Ajusta a cor do texto com base na seleção
    textAlign: "center",
    width: "116px",
    height: "182px", 
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    margin: "0px",
    padding: "10px",
    backgroundColor: "white",//selecionada ? corBorda : "white",
    borderRadius: "16px",
    border: `1.5px solid black`,//`1.5px solid ${selecionada ? "white" : "black"}`,
  };

  return (
    <div style={estiloCarta} onClick={onCartaClick}>
      <p style={estiloTexto}>{texto}</p>
    </div>
  );
};

export default Carta;
