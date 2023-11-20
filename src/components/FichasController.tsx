import React from "react";
import OverlayRectangle from "./OverlayRectangle";
import ContadorFicha from "./ContadorFicha";
import Linha from "./Linha";

import fichaAmarelaImage from "../imgs/ficha-amarela.png";
import fichaLaranjaImage from "../imgs/ficha-laranja.png";
import fichaRosaImage from "../imgs/ficha-rosa.png";
import fichaRoxaImage from "../imgs/ficha-roxa.png";
import fichaVerdeImage from "../imgs/ficha-verde.png";

interface FichasControllerProps {
  onClick?: () => void;
}

const buttonStyle: React.CSSProperties = {
  width: "200px",
  height: "51px",
  color: "black",
  backgroundColor: "white",
  border: "none",
  borderRadius: "78px",
  fontSize: "24px",
  cursor: "pointer",
  position: "absolute",
  bottom: "20px",
  left: "50%", 
  transform: "translateX(-50%)", 
};

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

const FichasController: React.FC<FichasControllerProps> = ({
  onClick,
}) => {
  return (
    <div style={backgroundStyle}>
      <OverlayRectangle active={true}>
        <ContadorFicha imagemSrc={fichaRoxaImage} numero={0} />
        <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom="0px" />
        <ContadorFicha imagemSrc={fichaRosaImage} numero={0} />
        <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom="0px" />
        <ContadorFicha imagemSrc={fichaLaranjaImage} numero={0} />
        <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom="0px" />
        <ContadorFicha imagemSrc={fichaAmarelaImage} numero={0} />
        <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom="0px" />
        <ContadorFicha imagemSrc={fichaVerdeImage} numero={0} />
      </OverlayRectangle>
      {<button style={buttonStyle} onClick={onClick}>confirmar</button>}
    </div>
  );
};

export default FichasController;
