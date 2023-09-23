import React from "react";

interface CaixaNumericaProps {
  numero: number;
}

const CaixaNumerica: React.FC<CaixaNumericaProps> = ({ numero }) => {
  const estiloCaixa: React.CSSProperties = {
    backgroundColor: "lightgray",
    borderRadius: "8px",
    padding: "8px",
    textAlign: "center",
  };

  return <div style={estiloCaixa}>{numero}</div>;
};

export default CaixaNumerica;
