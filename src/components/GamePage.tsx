import React, { useState } from "react";
import OverlayRectangle from "./OverlayRectangle";
import BackgroundOverlay from "./BackgroundOverlay";
import BotaoGrandeImagem from "./BotaoGrandeImagem";
import Header from "./Header";
import TextoComTooltip from "./TextoComTooltip";
import Linha from "./Linha";
import ContadoresContainer from "./ContadoresContainer";
import BotaoPequenoImagem from "./BotaoPequenoImagem";
import BotoesContainerH from "./BotoesContainerH";
import Texto from "./Texto";
import Espaco from "./Espaco";
import Imagem from "./Imagem";
import ContadorFicha from "./ContadorFicha";

// Importe das imagens da pasta 'imgs'
import fichaAmarelaImage from "../imgs/ficha-amarela.png";
import fichaLaranjaImage from "../imgs/ficha-laranja.png";
import fichaRosaImage from "../imgs/ficha-rosa.png";
import fichaRoxaImage from "../imgs/ficha-roxa.png";
import fichaVerdeImage from "../imgs/ficha-verde.png";
import fichasImage from "../imgs/fichas.png";
import imagensImage from "../imgs/imagens.png";
import qrCodeImage from "../imgs/qrcode.png";
import botaoQrCodeImage from "../imgs/botaoQrCodeImage.png";
import botaoImagensImage from "../imgs/botaoImagensImage.png";

const GamePage: React.FC = () => {
    const [isRectangleActive1, setRectangle1Active] = useState(false);
    const [isRectangleActive2, setRectangle2Active] = useState(false);
    const [isRectangleActive3, setRectangle3Active] = useState(false);
    const [isRectangleActive4, setRectangle4Active] = useState(false);
    const [isRectangleActive5, setRectangle5Active] = useState(false);
  
    const handleShowRectangle1Click = () => {
      setRectangle1Active(true);
    };
  
    const handleHideRectangle1Click = () => {
      setRectangle1Active(false);
    };
  
    const handleShowRectangle2Click = () => {
      setRectangle2Active(true);
    };
  
    const handleHideRectangle2lick = () => {
      setRectangle2Active(false);
    };
  
    const handleShowRectangle3Click = () => {
      setRectangle3Active(true);
    };
  
    const handleHideRectangle3Click = () => {
      setRectangle3Active(false);
    };
  
    const handleShowRectangle4Click = () => {
      setRectangle4Active(true);
    };
  
    const handleHideRectangle4Click = () => {
      setRectangle4Active(false);
    };
  
    const handleShowRectangle5Click = () => {
      setRectangle5Active(true);
    };
  
    const handleHideRectangle5Click = () => {
      setRectangle5Active(false);
    };
  
    const contadores = [
      {
        imagemSrc: fichaRoxaImage,
        numero: 0,
      },
      {
        imagemSrc: fichaRosaImage,
        numero: 0,
      },
      {
        imagemSrc: fichaLaranjaImage,
        numero: 0,
      },
      {
        imagemSrc: fichaAmarelaImage,
        numero: 0,
      },
      {
        imagemSrc: fichaVerdeImage,
        numero: 0,
      },
    ];
  
    const handleClick1 = () => {
      alert("Botão 1 clicado!");
    };
  
    const handleClick2 = () => {
      alert("Botão 2 clicado!");
    };
  
    const handleClick3 = () => {
      alert("Botão 3 clicado!");
    };
  
    const handleClick4 = () => {
      alert("Botão 4 clicado!");
    };
  
    const handleClick5 = () => {
      alert("Botão 5 clicado!");
    };
  
    const handleClick6 = () => {
      alert("Botão 4 clicado!");
    };
  
    const handleClick7 = () => {
      alert("Botão 5 clicado!");
    };
  
    const nomeUsuario = "Mark";
  
    return (
      <div>
        <Header nomeUsuario={nomeUsuario} />
        <TextoComTooltip texto="Interações" alarmeOnClick={handleClick1} />
        <BotaoGrandeImagem
          texto="escanear cenário"
          onClick={handleClick2}
          imagemSrc={qrCodeImage}
        />
        <BotaoGrandeImagem
          texto="criar cenário"
          onClick={handleClick3}
          imagemSrc={imagensImage}
        />
        <Linha comprimento="90%" cor="black" marginTop="30px" />
        <TextoComTooltip
          texto="contagem de cartas"
          alarmeOnClick={handleClick4}
        />
        <ContadoresContainer contadores={contadores} />
        <BotaoPequenoImagem
          texto="adicionar fichas"
          onClick={handleClick5}
          imagemSrc={fichasImage}
        />
        <Linha comprimento="90%" cor="black" marginTop="30px" />
        <BotoesContainerH
          botoes={[
            {
              texto: "finalizar partida",
              onClick: handleClick6,
              largura: "200px",
              corTexto: "white",
              corCaixa: "black",
            },
            {
              texto: "desistir",
              onClick: handleClick7,
              largura: "116px",
              corTexto: "white",
              corCaixa: "black",
            },
          ]}
        />
        {isRectangleActive1 && <BackgroundOverlay />}
        <OverlayRectangle active={isRectangleActive1}>
          <Texto texto="Caso caia em uma casa **com** um **QR code**, clique no botão:" fonte = "16px" largura = "249px"/>
          <Espaco altura="20px" />
          <Imagem src={botaoQrCodeImage} altura="50.4px" largura="173.6px" />
          <Espaco altura="20px" />
          <Texto texto="Caso caia em uma casa **sem** um **QR code**, clique no botão:"  fonte = "16px" largura = "249px"/>
          <Espaco altura="20px" />
          <Imagem src={botaoImagensImage} altura="50.4px" largura="173.6px" />
        </OverlayRectangle>
  
        {isRectangleActive2 && <BackgroundOverlay />}
        <OverlayRectangle active={isRectangleActive2}>
          <Texto texto="Ao receber uma ficha de pensamento intrusivo, adicione a ficha na contagem para receber sua **recompensa** no final do jogo!"  fonte = "16px" largura = "249px"/>
          <Espaco altura="20px" />
          <Texto texto="Não esqueça de adicionar todas as suas fichas **antes do final do jogo**" fonte = "16px" largura = "249px"/>
        </OverlayRectangle>
  
        {isRectangleActive3 && <BackgroundOverlay />}
        <OverlayRectangle active={isRectangleActive3}>
          <ContadorFicha imagemSrc={fichaRoxaImage} numero={0} />
          <Linha comprimento="90%" cor="black" marginTop="0px" />
          <ContadorFicha imagemSrc={fichaRosaImage} numero={0} />
          <Linha comprimento="90%" cor="black" marginTop="0px" />
          <ContadorFicha imagemSrc={fichaLaranjaImage} numero={0} />
          <Linha comprimento="90%" cor="black" marginTop="0px" />
          <ContadorFicha imagemSrc={fichaAmarelaImage} numero={0} />
          <Linha comprimento="90%" cor="black" marginTop="0px" />
          <ContadorFicha imagemSrc={fichaVerdeImage} numero={0} />
        </OverlayRectangle>
  
        {isRectangleActive4 && <BackgroundOverlay />}
        <OverlayRectangle active={isRectangleActive4}>
          <Texto texto="Certeza que quer desistir do jogo? Você vai perder todo o progresso da partida atual." fonte = "16px" largura = "249px"/>
          <Espaco altura="20px" />
          <BotoesContainerH
            botoes={[
              {
                texto: "sim, desisto",
                onClick: handleClick6,
                largura: "116px",
                corTexto: "white",
                corCaixa: "black",
              },
              {
                texto: "não, voltar",
                onClick: handleClick7,
                largura: "116px",
                corTexto: "white",
                corCaixa: "black",
              },
            ]}
          />
        </OverlayRectangle>
  
        {isRectangleActive5 && <BackgroundOverlay />}
        <OverlayRectangle active={isRectangleActive5}>
          <Texto texto="Certeza que quer finalizar a partida?" fonte = "16px" largura = "249px"/>
          <Espaco altura="20px" />
          <BotoesContainerH
            botoes={[
              {
                texto: "sim, acabou",
                onClick: handleClick6,
                largura: "120px",
                corTexto: "white",
                corCaixa: "black",
              },
              {
                texto: "não, voltar",
                onClick: handleClick7,
                largura: "112px",
                corTexto: "white",
                corCaixa: "black",
              },
            ]}
          />
        </OverlayRectangle>
      </div>
    );
  };

export default GamePage;