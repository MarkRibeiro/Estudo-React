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
    display: "block",
    margin: "0 auto",
  };

  return <img src={src} alt="Imagem" style={estiloImagem} />;
};

export default Imagem;
