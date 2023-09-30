import React from "react";

type BotaoProps = {
  texto: string;
  imagemSrc: string;
};

const BotaoGrandeImagem: React.FC<BotaoProps> = ({
  texto,
  imagemSrc,
}) => {
  const imagemStyle = {
    maxWidth: "75px",
    maxHeight: "75px",
  };

  const botaoStyle = {
    width: "327px",
    height: "94px",
    borderRadius: "10px",
    border: "1px solid #000",
    background: "#FFF",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    marginTop: "23px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  const primeiraAreaStyle = {
    width: "100px",
  };

  const segundaAreaStyle = {
    flex: "1",
    marginLeft: "17px",
    textAlign: "center" as const,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={botaoStyle}>
        {" "}
        <div style={primeiraAreaStyle}>
          <img
            src={imagemSrc}
            alt="Ícone"
            style={{ ...imagemStyle, marginLeft: "17px" }}
          />
        </div>
        <div style={segundaAreaStyle}>{texto}</div>
      </div>
    </div>
  );
};

export default BotaoGrandeImagem;
