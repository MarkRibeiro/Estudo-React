import React, { useState } from "react";

type ContadorProps = {
  imagemSrc: string;
  numero: number;
};

const Contador: React.FC<ContadorProps> = ({ imagemSrc, numero }) => {
  const [contadorNumero, setContadorNumero] = useState(numero);

  const contadorStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const circuloStyle: React.CSSProperties = {
    backgroundColor: "white",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    border: "1px solid black",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1) inset",
  };

  const imagemStyle: React.CSSProperties = {
    width: "36.5px",
    height: "36.5px",
  };

  const numeroStyle: React.CSSProperties = {
    color: "black",
    fontSize: "24px",
  };

  const alterarNumero = () => {
    setContadorNumero(contadorNumero + 1);
  };

  return (
    <div style={contadorStyle}>
      <img src={imagemSrc} alt="Ícone" style={imagemStyle} />
      <div style={circuloStyle} onClick={alterarNumero}>
        <span style={numeroStyle}>{contadorNumero}</span>
      </div>
    </div>
  );
};

export default Contador;
