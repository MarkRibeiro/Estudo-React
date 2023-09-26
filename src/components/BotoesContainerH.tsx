import React from "react";
import Botao from "./Botao";

type BotoesContainerHProps = {
  botoes: Array<{
    texto: string;
    onClick: () => void;
    largura: string;
    corTexto: string;
    corCaixa: string;
  }>;
};

const BotoesContainerH: React.FC<BotoesContainerHProps> = ({ botoes }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const botaoWrapperStyle: React.CSSProperties = {
    marginRight: "30px",
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

export default BotoesContainerH;
