import React from "react";

type LinhaProps = {
  comprimento: string;
  cor: string;
  marginTop: string;
  marginBottom: string;
};

const Linha: React.FC<LinhaProps> = ({ comprimento, cor, marginTop, marginBottom }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  };

  const linhaStyle = {
    width: comprimento,
    height: "1px",
    background: cor,
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <div style={containerStyle}>
      <div style={linhaStyle}></div>
    </div>
  );
};

export default Linha;
