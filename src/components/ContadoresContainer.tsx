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
    justifyContent: "center",
    alignItems: "center",
  };

  const contadorWrapperStyle: React.CSSProperties = {
    marginRight: "29px",
  };

  return (
    <div style={containerStyle}>
      {contadores.map((contador, index) => (
        <div
          key={index}
          style={index === contadores.length - 1 ? {} : contadorWrapperStyle}
        >
          <Contador imagemSrc={contador.imagemSrc} numero={contador.numero} />
        </div>
      ))}
    </div>
  );
};

export default ContadoresContainer;
