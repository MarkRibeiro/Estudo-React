import React from "react";

interface ImagemInfo {
  src: string;
  largura: string;
  altura: string;
}

interface ImagensEmLinhaProps {
  imagens: ImagemInfo[];
  distancia: string;
}

const ImagensEmLinha: React.FC<ImagensEmLinhaProps> = ({ imagens, distancia }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem.src}
          alt={`Imagem ${index + 1}`}
          style={{
            width: imagem.largura,
            height: imagem.altura,
            marginRight: index < imagens.length - 1 ? distancia : "0",
          }}
        />
      ))}
    </div>
  );
};

export default ImagensEmLinha;
