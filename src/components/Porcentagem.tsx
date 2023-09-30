import React from "react";

interface PorcentagemProps {
  porcentagens: { imagemSrc: string; texto: string; tamanhoFonte?: string; marginRight?: string }[];
}

const Porcentagem: React.FC<PorcentagemProps> = ({ porcentagens }) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      {porcentagens.map((porcentagem, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginRight: porcentagem.marginRight || "16px" }}>
          <img
            src={porcentagem.imagemSrc}
            alt="Imagem"
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
          />
          <span
            style={{
              fontSize: porcentagem.tamanhoFonte,
              fontWeight: "bold",
            }}
          >
            {porcentagem.texto}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Porcentagem;
