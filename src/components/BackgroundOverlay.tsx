import React from "react";

const BackgroundOverlay: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 9998,
  };

  return <div style={backgroundStyle}></div>;
};

export default BackgroundOverlay;
