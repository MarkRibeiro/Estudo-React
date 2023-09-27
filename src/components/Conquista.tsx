import React from "react";
import cadeado from "../imgs/cadeado.png";

interface ConquistaProps {
  ativado: boolean;
  imagem: string;
  onClick: () => void; // Adiciona uma função de clique personalizada
}

const Conquista: React.FC<ConquistaProps> = ({
  ativado,
  imagem,
  onClick, // Recebe a função de clique personalizada
}) => {
  return (
    <button
      onClick={onClick} // Usa a função de clique personalizada
      style={{
        width: "63px",
        height: "63px",
        borderRadius: "50%",
        backgroundColor: ativado ? "transparent" : "#000",
        border: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <img
        src={imagem}
        alt="Conquista"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: ativado ? "none" : "grayscale(100%)",
          border: "none", // Remove a borda em ambos os casos
        }}
      />
      {!ativado && (
        <img
          src={cadeado}
          alt="Cadeado"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "26px",
          }}
        />
      )}
    </button>
  );
};

export default Conquista;
