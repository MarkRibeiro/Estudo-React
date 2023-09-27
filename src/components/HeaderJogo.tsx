import React from "react";

type HeaderJogoProps = {
  nomeUsuario: string;
};

const headerStyle = {
  background: "black",
  color: "white",
  height: "97px",
  paddingTop: "24px",
  paddingLeft: "30px",
  paddingBottom: "23px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const nomeUsuarioStyle = {
  fontSize: "20px",
  margin: "0px",
};

const partidaStyle = {
  fontWeight: "bold",
  margin: "0px",
};

const HeaderJogo: React.FC<HeaderJogoProps> = ({ nomeUsuario }) => {
  return (
    <header style={headerStyle}>
      <h1 style={nomeUsuarioStyle}>{nomeUsuario}</h1>
      <p style={partidaStyle}>EM PARTIDA</p>
    </header>
  );
};

export default HeaderJogo;
