import React from "react";

interface ImagemProps {
  src: string;
  altura: string;
  largura: string;
}

const Imagem: React.FC<ImagemProps> = ({ src, altura, largura }) => {
  const estiloImagem: React.CSSProperties = {
    height: altura,
    width: largura,
    display: "block", // Define a imagem como um bloco para centralizá-la horizontalmente
    margin: "0 auto", // Define a margem automática para centralização horizontal
  };

  return <img src={src} alt="Imagem" style={estiloImagem} />;
};

export default Imagem;
