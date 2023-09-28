import React, { useState } from "react";
import HeaderConquistasPage from "./HeaderConquistasPage";
import Espaco from "./Espaco";
import Botao from "./Botao";
import TextosEmLinha from "./TextosEmLinha";
import ConquistasEmLinha from "./ConquistasEmLinha";
import BackgroundOverlay from "./BackgroundOverlay";
import OverlayRectangle from "./OverlayRectangle";
import HeaderConquista from "./HeaderConquista";
import Texto from "./Texto";
import Linha from "./Linha";
import Porcentagem from "./Porcentagem";
import { Link } from "react-router-dom";

// Importe das imagens da pasta 'imgs'
import teste from "../imgs/teste.png";
import ph from "../imgs/ph.png"
import fichaAmarelaImage from "../imgs/ficha-amarela.png";
import fichaLaranjaImage from "../imgs/ficha-laranja.png";
import fichaRosaImage from "../imgs/ficha-rosa.png";
import fichaRoxaImage from "../imgs/ficha-roxa.png";
import fichaVerdeImage from "../imgs/ficha-verde.png";

const ConquistasPage: React.FC = () => {
  const [isRectangleActive1, setRectangle1Active] = useState(false);

  const handleShowRectangle1Click = () => {
    if (conquistasLinha1[0].ativado) {
      setRectangle1Active(true);
    }
  };

  const handleHideRectangle1Click = () => {
    setRectangle1Active(false);
  };

  const handleShowRectangle2Click = () => {
    if (conquistasLinha1[1].ativado) {
      setRectangle1Active(true);
    }
  };

  const handleHideRectangle2Click = () => {
    setRectangle1Active(false);
  };

  const conquistasLinha1 = [
    { imagem: teste, ativado: true, onClick: handleShowRectangle1Click },
    { imagem: teste, ativado: false, onClick: handleShowRectangle2Click },
    { imagem: teste, ativado: false, onClick: () => alert("Conquista 3 clicada!") },
    { imagem: teste, ativado: false, onClick: () => alert("Conquista 4 clicada!") },
    { imagem: teste, ativado: false, onClick: () => alert("Conquista 5 clicada!") },
  ];
  
  const conquistasLinha2 = [
    { imagem: teste, ativado: false, onClick: () => alert("Conquista 6 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 7 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 8 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 9 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 10 clicada!") },
  ];

  const conquistasLinha3 = [
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 11 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 12 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 13 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 14 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 15 clicada!") },
  ];

  const conquistasLinha4 = [
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 16 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 17 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 18 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 19 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 20 clicada!") },
  ];

  const conquistasLinha5 = [
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 21 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 22 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 23 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 24 clicada!") },
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 25 clicada!") },
  ];

  const conquistasLinha6 = [
    { imagem: ph, ativado: false, onClick: () => alert("Conquista 26 clicada!") },
  ];

  return (
    <div>
      <HeaderConquistasPage nomeUsuario={"nome de usuário"} />
      <Espaco altura="50px" />
      <TextosEmLinha textoEsquerda="conquistas" textoDireita="1/26" largura="337px" />
      <Espaco altura="20px" />
      <ConquistasEmLinha conquistas={conquistasLinha1} />
      <Espaco altura="10px" />
      <ConquistasEmLinha conquistas={conquistasLinha2} />
      <Espaco altura="10px" />
      <ConquistasEmLinha conquistas={conquistasLinha3} />
      <Espaco altura="10px" />
      <ConquistasEmLinha conquistas={conquistasLinha4} />
      <Espaco altura="10px" />
      <ConquistasEmLinha conquistas={conquistasLinha5} />
      <Espaco altura="10px" />
      <ConquistasEmLinha conquistas={conquistasLinha6} />
      <Espaco altura="50px" />
      <Link to="/jogo" style={{ color: "black", textDecoration: "none" }}>
        <Botao
          texto="jogar"
          largura="330px"
          corTexto="white"
          corCaixa="black"
        />
      </Link>
      {isRectangleActive1 && (
        <div onClick={handleHideRectangle1Click}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive1}>
            <HeaderConquista
              imagemSrc={teste}
              titulo="o diabo"
              subtitulo="satã em pessoa"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Cadê o Rivotril?** Seus índices de estresse estão muito altos!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Algo está te tirando do eixo. Às vezes o estresse é a sensação mais comum. Só cuidado para não apelar para a violência. Pedir ajuda ou desabafar pode ajudar. Pense nisso!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Agora, se quiser bater em alguém, tenho algumas sugestões..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha comprimento="90%" cor="black" marginTop="0px" />
            <Espaco altura="10px" />
            <Porcentagem
              imagemSrc={fichaRosaImage}
              texto="100%"
              tamanhoFonte="28px"
            />
          </OverlayRectangle>
        </div>
      )}
    </div>
  );
};

export default ConquistasPage;

