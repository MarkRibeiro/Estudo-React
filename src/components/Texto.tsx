import React from "react";

interface TextoProps {
  texto: string;
  fonte: string;
  largura: string;
}

const estiloTextoContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center", // Centralizar horizontalmente
};

const estiloTexto: React.CSSProperties = {
  textAlign: "center",
};

const Texto: React.FC<TextoProps> = ({ texto, fonte, largura }) => {
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
      <div style={{ ...estiloTexto, fontSize: fonte, width: largura }}>
        {processarTexto(texto)}
      </div>
    </div>
  );
};

export default Texto;
