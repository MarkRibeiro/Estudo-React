import React from "react";
import Imagem from "./Imagem";
import Espaco from "./Espaco";
import BotoesContainerV from "./BotoesContainerV";
import Texto from "./Texto";
import ImagensEmLinha from "./ImagensEmLinha";

import logoImage from "../imgs/logo.png";
import ADPUCImage from "../imgs/ADPUC.png";
import PUCImage from "../imgs/PUC.png";
import MRSAImage from "../imgs/MRSA.png";

const imagens = [
    {
      src: ADPUCImage,
      largura: "83px",
      altura: "66px",
    },
    {
      src: PUCImage,
      largura: "34px",
      altura: "66px",
    },
    {
      src: MRSAImage,
      largura: "49px",
      altura: "49px",
    },
  ];

const HomePage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: "black", // Define a cor de fundo como preto
    color: "white", // Define a cor do texto como branco (para melhor visibilidade)
    minHeight: "100vh", // Garante que a página tenha pelo menos a altura da janela de visualização
    padding: "20px", // Adiciona um preenchimento para espaçamento interno
  };

  const handleClick1 = () => {
    alert("Botão 1 clicado!");
  };

  const handleClick2 = () => {
    alert("Botão 2 clicado!");
  };

  return (
    <div style={pageStyle}>
        <Espaco altura="20px" />
        <Imagem src={logoImage} altura="230px" largura="237px" />
        <Espaco altura="80px" />
        <BotoesContainerV
            botoes={[
              {
                texto: "login",
                onClick: handleClick1,
                largura: "287px",
                corTexto: "black",
                corCaixa: "white",
              },
              {
                texto: "cadastro",
                onClick: handleClick2,
                largura: "287px",
                corTexto: "black",
                corCaixa: "white",
              },
            ]}
          />
          <Espaco altura="50px" />
          <Texto texto="Esse aplicativo é um auxílio para a versão de tabuleiro"  fonte = "20px" largura = "265px"/>
          <Espaco altura="50px" />
          <ImagensEmLinha imagens={imagens} distancia="30px" />
    </div>
  );
};

export default HomePage;
