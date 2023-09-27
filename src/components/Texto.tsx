import React from "react";

interface TextoProps {
  texto: string;
  fonte: string;
  largura: string;
  alinhamento: "left" | "center" | "right";
}

const estiloTextoContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center", // Centralizar horizontalmente
};

const Texto: React.FC<TextoProps> = ({ texto, fonte, largura, alinhamento }) => {
  const estiloTexto: React.CSSProperties = {
    fontSize: fonte,
    width: largura,
    textAlign: alinhamento,
  };

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

  return (
    <div style={estiloTextoContainer}>
      <div style={estiloTexto}>
        {processarTexto(texto)}
      </div>
    </div>
  );
};

export default Texto;
