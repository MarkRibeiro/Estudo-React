import React from "react";

type LinhaProps = {
  comprimento: string; // Porcentagem de comprimento da linha (ex: "80%")
  cor: string; // Cor da linha (ex: "black", "#FF0000", "rgb(0, 0, 255)")
  marginTop: string;
};

const Linha: React.FC<LinhaProps> = ({ comprimento, cor, marginTop }) => {
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
  };

  return (
    <div style={containerStyle}>
      <div style={linhaStyle}></div>
    </div>
  );
};

export default Linha;
