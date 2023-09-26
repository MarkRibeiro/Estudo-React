import React from "react";
import Botao from "./Botao";

type BotoesContainerVProps = {
  botoes: Array<{
    texto: string;
    onClick: () => void;
    largura: string;
    corTexto: string;
    corCaixa: string;
  }>;
};

const BotoesContainerV: React.FC<BotoesContainerVProps> = ({ botoes }) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // Empilhar verticalmente
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  // Adicione uma margem inferior de 20px entre os botões
  const botaoWrapperStyle: React.CSSProperties = {
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      {botoes.map((botao, index) => (
        <div
          key={index}
          style={index === botoes.length - 1 ? {} : botaoWrapperStyle}
        >
          <Botao
            texto={botao.texto}
            onClick={botao.onClick}
            largura={botao.largura}
            corTexto={botao.corTexto}
            corCaixa={botao.corCaixa}
          />
        </div>
      ))}
    </div>
  );
};

export default BotoesContainerV;
