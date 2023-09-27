import React from "react";

type HeaderConquistasPageProps = {
  nomeUsuario: string;
};

const headerStyle: React.CSSProperties = {
  background: "black",
  color: "white",
  height: "187px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const nomeUsuarioStyle: React.CSSProperties = {
  fontSize: "24px",
  margin: "0px",
};

const HeaderConquistasPage: React.FC<HeaderConquistasPageProps> = ({ nomeUsuario }) => {
  return (
    <header style={headerStyle}>
      <h1 style={nomeUsuarioStyle}>{nomeUsuario}</h1>
    </header>
  );
};

export default HeaderConquistasPage;
