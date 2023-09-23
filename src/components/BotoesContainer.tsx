import React from "react";
import Botao from "./Botao";

type BotoesContainerProps = {
  botoes: Array<{
    texto: string;
    onClick: () => void;
    largura: string;
  }>;
};

const BotoesContainer: React.FC<BotoesContainerProps> = ({ botoes }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const botaoWrapperStyle: React.CSSProperties = {
    marginRight: "30px", // Aplica a margem entre os botões
  };

  return (
    <div style={containerStyle}>
      {botoes.map((botao, index) => (
        <div
          key={index}
          style={
            index === botoes.length - 1
              ? {} // Remove a margem no último elemento
              : botaoWrapperStyle
          }
        >
          <Botao
            texto={botao.texto}
            onClick={botao.onClick}
            largura={botao.largura}
          />
        </div>
      ))}
    </div>
  );
};

export default BotoesContainer;
