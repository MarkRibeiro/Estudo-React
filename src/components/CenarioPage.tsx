import React from "react";
import CartasEBotao from "./CartasEBotao";


// Importe das imagens da pasta 'imgs'
import fundo from "../imgs/cenario/c1.png";

const CenarioPage: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center", // Centralize horizontalmente
    alignItems: "center", // Centralize verticalmente
  };

  const roxo = "#817BD3";
  const rosa = "#D27AA2";
  const laranja = "#E5A146";
  const amarelo = "#F4DB3C";
  const verde = "#A0C172";

  return (
    <div style={backgroundStyle}>
        <CartasEBotao
            cartas={[
                { corBorda: roxo, texto: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem" },
                { corBorda: rosa, texto: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem" },
                { corBorda: laranja, texto: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem" },
                { corBorda: amarelo, texto: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem" },
                { corBorda: verde, texto: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem" },
            ]}
            rotacao={90}
            textoBotao="confirmar escolha"
            ativadoBotao={true}
            />
    </div>
    );
    };

export default CenarioPage;
