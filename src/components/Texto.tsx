import React from "react";

interface TextoProps {
  texto: string;
}

const estiloTexto: React.CSSProperties = {
  fontSize: "24px",
  textAlign: "center",
};

const Texto: React.FC<TextoProps> = ({ texto }) => {
  const processarTexto = (texto: string) => {
    const partes = texto.split("**");
    return partes.map((parte, index) => {
      if (index % 2 === 0) {
        return parte;
      } else {
        return <strong key={index}>{parte}</strong>;
      }
    });
  };

  return <div style={estiloTexto}>{processarTexto(texto)}</div>;
};

export default Texto;
