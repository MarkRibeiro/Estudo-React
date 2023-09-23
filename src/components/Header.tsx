import React from "react";

type HeaderProps = {
  nomeUsuario: string;
};

const headerStyle = {
  background: "black",
  color: "white",
  height: "97px",
  paddingTop: "24px",
  paddingLeft: "30px",
  paddingBottom: "23px",
};

const nomeUsuarioStyle = {
  fontSize: "20px",
  margin: "0px",
};

const partidaStyle = {
  fontWeight: "bold",
  margin: "0px",
};

const Header: React.FC<HeaderProps> = ({ nomeUsuario }) => {
  return (
    <header style={headerStyle}>
      <h1 style={nomeUsuarioStyle}>{nomeUsuario}</h1>
      <p style={partidaStyle}>EM PARTIDA</p>
    </header>
  );
};

export default Header;
