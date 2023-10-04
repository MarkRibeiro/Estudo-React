import React from "react";

interface CartaProps {
  corBorda: string;
  texto: string;
}

const Carta: React.FC<CartaProps> = ({ corBorda, texto }) => {
  const estiloCarta: React.CSSProperties = {
    width: "126px",
    height: "192px",
    backgroundColor: "white",//corBorda,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
  };

  const estiloTexto: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    width: "116px",
    height: "182px", 
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    margin: "0px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "16px",
    border: `1.5px solid black`,
  };

  return (
    <div style={estiloCarta}>
      <p style={estiloTexto}>{texto}</p>
    </div>
  );
};

export default Carta;
