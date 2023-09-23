import React from "react";

interface EspacoProps {
  altura: string;
}

const Espaco: React.FC<EspacoProps> = ({ altura }) => {
  const estiloEspaco: React.CSSProperties = {
    height: altura,
  };

  return <div style={estiloEspaco}></div>;
};

export default Espaco;
