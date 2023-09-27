import React from "react";

interface PorcentagemProps {
  imagemSrc: string;
  texto: string;
  tamanhoFonte?: string; // Tamanho da fonte como um parâmetro opcional
}

const Porcentagem: React.FC<PorcentagemProps> = ({
  imagemSrc,
  texto,
  tamanhoFonte
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imagemStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    marginRight: "8px", // Espaço entre a imagem e o texto
  };

  const textoStyle: React.CSSProperties = {
    fontSize: tamanhoFonte, // Aplica o tamanho da fonte fornecido
    fontWeight: "bold", // Torna o texto em negrito
  };

  return (
    <div style={containerStyle}>
      <img src={imagemSrc} alt="Imagem" style={imagemStyle} />
      <span style={textoStyle}>{texto}</span>
    </div>
  );
};

export default Porcentagem;
