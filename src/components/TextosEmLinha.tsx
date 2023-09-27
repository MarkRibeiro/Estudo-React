import React from "react";

interface TextosEmLinhaProps {
  textoEsquerda: string;
  textoDireita: string;
  largura: string;
}

const TextosEmLinha: React.FC<TextosEmLinhaProps> = ({
  textoEsquerda,
  textoDireita,
  largura,
}) => {
  const containerStyle: React.CSSProperties = {
    width: largura,
    display: "flex",
    justifyContent: "space-between", // Espaço entre os textos
  };

  const textoStyle: React.CSSProperties = {
    margin: "0", // Remove margens padrão
    fontSize: "24px", // Define o tamanho da fonte como 24px
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={containerStyle}>
        <span style={textoStyle}>{textoEsquerda}</span>
        <span style={textoStyle}>{textoDireita}</span>
      </div>
    </div>
  );
};

export default TextosEmLinha;
