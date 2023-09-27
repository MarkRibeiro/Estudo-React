import React from "react";

interface HeaderConquistaProps {
  imagemSrc: string;
  titulo: string;
  subtitulo: string;
}

const HeaderConquista: React.FC<HeaderConquistaProps> = ({
  imagemSrc,
  titulo,
  subtitulo,
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px", // Espaço entre a imagem e o texto
  };

  const imagemStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%", // Torna a imagem circular
    objectFit: "cover", // Redimensiona a imagem para cobrir o círculo
  };

  const textoContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const tituloStyle: React.CSSProperties = {
    marginBottom: "0px", // Distância de 3px abaixo do título
  };

  return (
    <div style={containerStyle}>
      <img src={imagemSrc} alt="Imagem" style={imagemStyle} />
      <div style={textoContainerStyle}>
        <h2 style={tituloStyle}>{titulo}</h2>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
};

export default HeaderConquista;
