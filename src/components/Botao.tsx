import React from "react";

type BotaoProps = {
  texto: string;
  onClick: () => void;
  largura: string;
  className?: string;
  corTexto: string;
  corCaixa: string;
};

const Botao: React.FC<BotaoProps> = ({
  texto,
  onClick,
  largura,
  className,
  corTexto,
  corCaixa,
}) => {
  const botaoStyle = {
    backgroundColor: corCaixa,
    height: "40px",
    width: largura,
    fontSize: "20px",
    color: corTexto,
    border: "none",
    borderRadius: "78px",
    cursor: "pointer",
  };

  // Estilo para centralizar horizontalmente
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <button className={className} onClick={onClick} style={botaoStyle}>
        {texto}
      </button>
    </div>
  );
};

export default Botao;
