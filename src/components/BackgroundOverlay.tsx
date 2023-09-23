import React from "react";

const BackgroundOverlay: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Cor de fundo mais clara e semi-transparente
    backdropFilter: "blur(2px)", // Efeito de desfoque no fundo
    zIndex: 9998, // Z-index menor para aparecer abaixo do OverlayRectangle
  };

  return <div style={backgroundStyle}></div>;
};

export default BackgroundOverlay;
