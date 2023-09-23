import React from "react";
import Contador from "./Contador";

type ContadoresContainerProps = {
  contadores: { imagemSrc: string; numero: number }[];
};

const ContadoresContainer: React.FC<ContadoresContainerProps> = ({
  contadores,
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center", // Centraliza horizontalmente
    alignItems: "center", // Centraliza verticalmente
  };

  const contadorWrapperStyle: React.CSSProperties = {
    marginRight: "29px", // Aplica a margem entre os contadores
  };

  return (
    <div style={containerStyle}>
      {contadores.map((contador, index) => (
        <div
          key={index}
          style={
            index === contadores.length - 1
              ? {} // Remove a margem no último elemento
              : contadorWrapperStyle
          }
        >
          <Contador imagemSrc={contador.imagemSrc} numero={contador.numero} />
        </div>
      ))}
    </div>
  );
};

export default ContadoresContainer;
