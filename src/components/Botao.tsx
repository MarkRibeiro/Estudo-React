import React from "react";

type BotaoProps = {
  texto: string;
  onClick: () => void;
  largura: string;
  className?: string; // Permita que a propriedade className seja opcional
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
    width: largura, // Use a largura passada como props
    fontSize: "20px",
    color: "white",
    border: "none",
    borderRadius: "78px",
    cursor: "pointer",
  };

  return (
    <button
      className={className} // Passe a propriedade className para o elemento <button>
      onClick={onClick}
      style={botaoStyle}
    >
      {texto}
    </button>
  );
};

export default Botao;
