import React from "react";

type BotaoProps = {
  texto: string;
  onClick?: () => void;
  largura: string;
  altura: string;
  className?: string;
  corTexto: string;
  corCaixa: string;
};

const Botao: React.FC<BotaoProps> = ({
  texto,
  onClick,
  largura,
  altura,
  className,
  corTexto,
  corCaixa,
}) => {
  const botaoStyle = {
    backgroundColor: corCaixa,
    height: altura,
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
      <button className={className} style={botaoStyle} onClick={onClick}>
        {texto}
      </button>
    </div>
  );
};

export default Botao;
