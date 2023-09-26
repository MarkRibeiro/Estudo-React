import React from "react";

type BotaoProps = {
  texto: string;
  onClick: () => void;
  imagemSrc: string;
};

const BotaoPequenoImagem: React.FC<BotaoProps> = ({
  texto,
  onClick,
  imagemSrc,
}) => {
  const imagemStyle = {
    maxWidth: "120px",
    maxHeight: "34px",
  };

  const botaoStyle = {
    width: "327px",
    height: "77px",
    borderRadius: "10px",
    border: "1px solid #000",
    background: "#FFF",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
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
      <div style={botaoStyle} onClick={onClick}>
        {" "}
        {/* Adicione onClick aqui */}
        <div style={primeiraAreaStyle}>
          <img
            src={imagemSrc}
            alt="Ícone"
            style={{ ...imagemStyle, marginLeft: "17px" }}
          />
        </div>
        <div style={segundaAreaStyle}>{texto}</div>
        {/* <button onClick={onClick} style={{ display: 'none' }}></button> */}
      </div>
    </div>
  );
};

export default BotaoPequenoImagem;
