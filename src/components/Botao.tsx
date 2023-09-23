import React from "react";

type BotaoProps = {
  texto: string;
  onClick: () => void;
  largura: string;
  className?: string;
};

const Botao: React.FC<BotaoProps> = ({
  texto,
  onClick,
  largura,
  className,
}) => {
  const botaoStyle = {
    backgroundColor: "black",
    height: "40px",
    width: largura,
    fontSize: "20px",
    color: "white",
    border: "none",
    borderRadius: "78px",
    cursor: "pointer",
  };

  return (
    <button className={className} onClick={onClick} style={botaoStyle}>
      {texto}
    </button>
  );
};

export default Botao;
