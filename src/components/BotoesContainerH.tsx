import React from "react";
import Botao from "./Botao";

type BotoesContainerHProps = {
  botoes: Array<{
    texto: string;
    onClick: () => void;
    largura: string;
    altura: string;
    corTexto: string;
    corCaixa: string;
  }>;
};

const BotoesContainerH: React.FC<BotoesContainerHProps> = ({ botoes }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "10px",
  };

  const botaoWrapperStyle: React.CSSProperties = {
    marginRight: "14px",
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
            altura={botao.altura}
            corTexto={botao.corTexto}
            corCaixa={botao.corCaixa}
          />
        </div>
      ))}
    </div>
  );
};

export default BotoesContainerH;
