import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import OverlayRectangle from "./OverlayRectangle";
import BackgroundOverlay from "./BackgroundOverlay";
import BotaoGrandeImagem from "./BotaoGrandeImagem";
import HeaderJogo from "./HeaderJogo";
import TextoComTooltip from "./TextoComTooltip";
import Linha from "./Linha";
import ContadoresContainer from "./ContadoresContainer";
import BotaoPequenoImagem from "./BotaoPequenoImagem";
import BotoesContainerH from "./BotoesContainerH";
import Texto from "./Texto";
import Espaco from "./Espaco";
import Imagem from "./Imagem";
import Botao from "./Botao";
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
    const navigate = useNavigate();  
  
    const handleShowRectangle1Click = () => {
      setRectangle1Active(true);
    };
  
    const handleHideRectangle1Click = () => {
      setRectangle1Active(false);
    };
  
    const handleShowRectangle2Click = () => {
      setRectangle2Active(true);
    };
  
    const handleHideRectangle2Click = () => {
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
  
    return (
      <div>
        <HeaderJogo nomeUsuario={"nome de usuário"} />
        <TextoComTooltip texto="Interações" alarmeOnClick={handleShowRectangle1Click} />
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" style={{color: "black", textDecoration: "none"}}>
          <BotaoGrandeImagem
            texto="escanear cenário"
            imagemSrc={qrCodeImage}
          />
        </Link>
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" style={{color: "black", textDecoration: "none"}}>
          <BotaoGrandeImagem
            texto="criar cenário"
            imagemSrc={imagensImage}
          />
        </Link>
        <Linha comprimento="90%" cor="black" marginTop="40px" marginBottom ="0px"/>
        <TextoComTooltip
          texto="contagem de cartas"
          alarmeOnClick={handleShowRectangle2Click}
        />
        <ContadoresContainer contadores={contadores} />
        <BotaoPequenoImagem
          texto="adicionar fichas"
          onClick={handleShowRectangle3Click}
          imagemSrc={fichasImage}
        />
        <Linha comprimento="90%" cor="black" marginTop="40px" marginBottom ="10px" />
        <Espaco altura="20px" />
        <BotoesContainerH
          botoes={[
            {
              texto: "finalizar partida",
              onClick: handleShowRectangle4Click,
              largura: "200px",
              altura: "40px",
              corTexto: "white",
              corCaixa: "black",
            },
            {
              texto: "desistir",
              onClick: handleShowRectangle5Click,
              largura: "116px",
              altura: "40px",
              corTexto: "white",
              corCaixa: "black",
            },
          ]}
        />
        {isRectangleActive1 && (
          <div onClick={handleHideRectangle1Click}>
            <BackgroundOverlay />
            <OverlayRectangle active={isRectangleActive1}>
              <Texto texto="Caso caia em uma casa **com** um **QR code**, clique no botão:" fonte = "20px" largura = "249px" alinhamento="center"/>
              <Espaco altura="20px" />
              <Imagem src={botaoQrCodeImage} altura="50.4px" largura="173.6px" />
              <Espaco altura="20px" />
              <Texto texto="Caso caia em uma casa **sem** um **QR code**, clique no botão:"  fonte = "20px" largura = "249px" alinhamento="center"/>
              <Espaco altura="20px" />
              <Imagem src={botaoImagensImage} altura="50.4px" largura="173.6px" />
            </OverlayRectangle>
          </div>
        )}
  
        {isRectangleActive2 && (
          <div onClick={handleHideRectangle2Click}>
            <BackgroundOverlay />
            <OverlayRectangle active={isRectangleActive2}>
              <Texto texto="Ao receber uma ficha de pensamento intrusivo, adicione a ficha na contagem para receber sua **recompensa** no final do jogo!"  fonte = "20px" largura = "249px" alinhamento="center"/>
              <Espaco altura="20px" />
              <Texto texto="Não esqueça de adicionar todas as suas fichas **antes do final do jogo**" fonte = "20px" largura = "249px" alinhamento="center"/>
            </OverlayRectangle>
          </div>
        )}
  
        {isRectangleActive3 && <BackgroundOverlay />}
          <OverlayRectangle active={isRectangleActive3}>
            <ContadorFicha imagemSrc={fichaRoxaImage} numero={0} />
            <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom ="0px"/>
            <ContadorFicha imagemSrc={fichaRosaImage} numero={0} />
            <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom ="0px"/>
            <ContadorFicha imagemSrc={fichaLaranjaImage} numero={0} />
            <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom ="0px"/>
            <ContadorFicha imagemSrc={fichaAmarelaImage} numero={0} />
            <Linha comprimento="90%" cor="black" marginTop="0px" marginBottom ="0px"/>
            <ContadorFicha imagemSrc={fichaVerdeImage} numero={0} />
          </OverlayRectangle>
  
        {isRectangleActive4 && (
          <div onClick={handleHideRectangle4Click}>
            <BackgroundOverlay />
            <OverlayRectangle active={isRectangleActive4}>
              <Texto texto="Certeza que quer finalizar a partida?" fonte="20px" largura="249px" alinhamento="center" />
              <Espaco altura="20px" />
              <BotoesContainerH
                botoes={[
                  {
                    texto: "sim, acabou",
                    onClick: () => {navigate("/conquistas");},
                    largura: "120px",
                    altura: "40px",
                    corTexto: "white",
                    corCaixa: "black",
                  },
                  {
                    texto: "não, voltar",
                    onClick: handleHideRectangle4Click,
                    largura: "112px",
                    altura: "40px",
                    corTexto: "white",
                    corCaixa: "black",
                  },
                ]}
              />
            </OverlayRectangle>
          </div>
        )}

        {isRectangleActive5 && (
          <div onClick={handleHideRectangle5Click}>
            <BackgroundOverlay />
            <OverlayRectangle active={isRectangleActive5}>
              <Texto texto="Certeza que quer desistir do jogo? Você vai perder todo o progresso da partida atual." fonte = "20px" largura = "249px" alinhamento="center"/>
              <Espaco altura="20px" />
              <BotoesContainerH
                botoes={[
                  {
                    texto: "sim, desisto",
                    onClick: () => {navigate("/conquistas");},
                    largura: "116px",
                    altura: "40px",
                    corTexto: "white",
                    corCaixa: "black",
                  },
                  {
                    texto: "não, voltar",
                    onClick: handleHideRectangle5Click,
                    largura: "116px",
                    altura: "40px",
                    corTexto: "white",
                    corCaixa: "black",
                  },
                ]}
              />
            </OverlayRectangle>
          </div>
        )}
      </div>
    );
  };

export default GamePage;