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

// Importe das imagens da pasta 'imgs/conquista'
import p1 from "../imgs/conquista/1/pequeno.png";
import g1 from "../imgs/conquista/1/grande.png";
import p2 from "../imgs/conquista/2/pequeno.png";
import g2 from "../imgs/conquista/2/grande.png";
import p3 from "../imgs/conquista/3/pequeno.png";
import g3 from "../imgs/conquista/3/grande.png";
import p4 from "../imgs/conquista/4/pequeno.png";
import g4 from "../imgs/conquista/4/grande.png";
import p5 from "../imgs/conquista/5/pequeno.png";
import g5 from "../imgs/conquista/5/grande.png";
import p6 from "../imgs/conquista/6/pequeno.png";
import g6 from "../imgs/conquista/6/grande.png";

// Importe das imagens da pasta 'imgs'
import ph from "../imgs/ph.png"
import fichaAmarelaImage from "../imgs/ficha-amarela.png";
import fichaLaranjaImage from "../imgs/ficha-laranja.png";
import fichaRosaImage from "../imgs/ficha-rosa.png";
import fichaRoxaImage from "../imgs/ficha-roxa.png";
import fichaVerdeImage from "../imgs/ficha-verde.png";

const ConquistasPage: React.FC = () => {
  const [isRectangleActive1, setRectangle1Active] = useState(false);
  const [isRectangleActive2, setRectangle2Active] = useState(false);
  const [isRectangleActive3, setRectangle3Active] = useState(false);
  const [isRectangleActive4, setRectangle4Active] = useState(false);
  const [isRectangleActive5, setRectangle5Active] = useState(false);
  const [isRectangleActive6, setRectangle6Active] = useState(false);
  const [isRectangleActive7, setRectangle7Active] = useState(false);
  const [isRectangleActive8, setRectangle8Active] = useState(false);
  const [isRectangleActive9, setRectangle9Active] = useState(false);
  const [isRectangleActive10, setRectangle10Active] = useState(false);
  const [isRectangleActive11, setRectangle11Active] = useState(false);
  const [isRectangleActive12, setRectangle12Active] = useState(false);
  const [isRectangleActive13, setRectangle13Active] = useState(false);
  const [isRectangleActive14, setRectangle14Active] = useState(false);
  const [isRectangleActive15, setRectangle15Active] = useState(false);
  const [isRectangleActive16, setRectangle16Active] = useState(false);
  const [isRectangleActive17, setRectangle17Active] = useState(false);
  const [isRectangleActive18, setRectangle18Active] = useState(false);
  const [isRectangleActive19, setRectangle19Active] = useState(false);
  const [isRectangleActive20, setRectangle20Active] = useState(false);
  const [isRectangleActive21, setRectangle21Active] = useState(false);
  const [isRectangleActive22, setRectangle22Active] = useState(false);
  const [isRectangleActive23, setRectangle23Active] = useState(false);
  const [isRectangleActive24, setRectangle24Active] = useState(false);
  const [isRectangleActive25, setRectangle25Active] = useState(false);
  const [isRectangleActive26, setRectangle26Active] = useState(false);

  const showRectangle = (conquista: { ativado: boolean }, setActiveFunction: (active: boolean) => void) => {
    if (conquista.ativado) {
      setActiveFunction(true);
    }
  };

  const hideRectangle = (setRectangleActive: (active: boolean) => void) => {
    setRectangleActive(false);
  };
  
  const conquistasLinha1 = [
    { imagem: p1, ativado: true, onClick: () => { showRectangle(conquistasLinha1[0], setRectangle1Active); } },
    { imagem: p2, ativado: true, onClick: () => { showRectangle(conquistasLinha1[1], setRectangle2Active); } },
    { imagem: p3, ativado: true, onClick: () => { showRectangle(conquistasLinha1[2], setRectangle3Active); } },
    { imagem: p4, ativado: true, onClick: () => { showRectangle(conquistasLinha1[3], setRectangle4Active); } },
    { imagem: p5, ativado: true, onClick: () => { showRectangle(conquistasLinha1[4], setRectangle5Active); } },
  ];  
  const conquistasLinha2 = [
    { imagem: p6, ativado: true, onClick: () => { showRectangle(conquistasLinha2[0], setRectangle6Active); } },
    { imagem: ph, ativado: true, onClick: () => { showRectangle(conquistasLinha2[1], setRectangle7Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha2[2], setRectangle8Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha2[3], setRectangle9Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha2[4], setRectangle10Active); } },
  ];
  const conquistasLinha3 = [
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha3[0], setRectangle11Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha3[1], setRectangle12Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha3[2], setRectangle13Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha3[3], setRectangle14Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha3[4], setRectangle15Active); } },
  ];
  const conquistasLinha4 = [
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha4[0], setRectangle16Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha4[1], setRectangle17Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha4[2], setRectangle18Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha4[3], setRectangle19Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha4[4], setRectangle20Active); } },
  ];
  const conquistasLinha5 = [
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha5[0], setRectangle21Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha5[1], setRectangle22Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha5[2], setRectangle23Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha5[3], setRectangle24Active); } },
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha5[4], setRectangle25Active); } },
  ];
  const conquistasLinha6 = [
    { imagem: ph, ativado: false, onClick: () => { showRectangle(conquistasLinha6[0], setRectangle26Active); } },
  ];

  return (
    <div>
      <HeaderConquistasPage nomeUsuario={"nome de usuário"} />
      <Espaco altura="50px" />
      <TextosEmLinha textoEsquerda="conquistas" textoDireita="7/26" largura="337px" />
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
          altura="50px"
          corTexto="white"
          corCaixa="black"
        />
      </Link>
      {isRectangleActive1 && (
        <div onClick={() => hideRectangle(setRectangle1Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive1}>
            <HeaderConquista
              imagemSrc={g1}
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
            <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
            <Espaco altura="10px" />
            <Porcentagem porcentagens= {[
              { imagemSrc: fichaRoxaImage, texto: "100%", tamanhoFonte: "28px", marginRight: "0px"},
            ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive2 && (
      <div onClick={() => hideRectangle(setRectangle2Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive2}>
          <HeaderConquista
            imagemSrc={g2}
            titulo="o esquisito"
            subtitulo="qual a graça de ser normal?"
          />
          <Espaco altura="10px" />
          <Texto
            texto="**Oh não!** Seus índices de aleatoriedade estão muito altos!"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Você é uma pessoa extremamente criativa e isso com certeza aparece bastante."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Sua família com certeza te chama de “único” ou “especial” né? Que nem aquele desenho que as mães não sabem como elogiar..."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaAmarelaImage, texto: "100%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
      {isRectangleActive3 && (
      <div onClick={() => hideRectangle(setRectangle3Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive3}>
          <HeaderConquista
            imagemSrc={g3}
            titulo="o medroso"
            subtitulo="vivendo cuidadosamente"
          />
          <Espaco altura="10px" />
          <Texto
            texto="**Cuidado!** Seus índices de medo estão muito altos!"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Algo está te tirando do eixo. Se precisar, não esqueça de procurar ajuda. A opinião de um amigo ou um profissional pode fazer diferença."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Só não pode acabar com medo da própria sombra hein..."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaVerdeImage, texto: "100%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
      {isRectangleActive4 && (
      <div onClick={() => hideRectangle(setRectangle4Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive4}>
          <HeaderConquista
            imagemSrc={g4}
            titulo="o focado"
            subtitulo="focadamente avoado"
          />
          <Espaco altura="10px" />
          <Texto
            texto="**Atenção?** Seus índices de foco estão muito altos!"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Você é uma pessoa muito focada ao seu redor e frequentemente se perde no momento. Tão focado que te consideraram avoado."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Cuidado para não se perder na própria cabeça, duvido que alguém consegue te tirar de lá..."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaLaranjaImage, texto: "100%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
      {isRectangleActive5 && (
      <div onClick={() => hideRectangle(setRectangle5Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive5}>
          <HeaderConquista
            imagemSrc={g5}
            titulo="o curioso"
            subtitulo="o que isso faz?"
          />
          <Espaco altura="10px" />
          <Texto
            texto="**Não toca nisso!** Seus índices de curiosidade estão muito altos!"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Você é uma pessoa muitíssimo curiosa. Talvez até demais. Às vezes deixar a mente descansar é bom também."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Sabe o que acontece com os curiosos? hehe..."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaRoxaImage, texto: "100%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
      {isRectangleActive6 && (
      <div onClick={() => hideRectangle(setRectangle6Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive6}>
          <HeaderConquista
            imagemSrc={g6}
            titulo="mix de frutas"
            subtitulo="uma mistura de sabores"
          />
          <Espaco altura="10px" />
          <Texto
            texto="**Desliguem o liquidificador!** Você está uma mistura caótica de emoções."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Muitas coisas estão acontecendo na sua vida. Mas tenha calma, tudo tem seu tempo."
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="Todos precisamos vivenciar o caos para apreciarmos a calmaria, não acha?"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaRoxaImage, texto: "20%", tamanhoFonte: "28px"},
            { imagemSrc: fichaRosaImage, texto: "20%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaLaranjaImage, texto: "20%", tamanhoFonte: "28px"},
            { imagemSrc: fichaAmarelaImage, texto: "20%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaVerdeImage, texto: "20%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
      {isRectangleActive7 && (
      <div onClick={() => hideRectangle(setRectangle7Active)}>
        <BackgroundOverlay />
        <OverlayRectangle active={isRectangleActive7}>
          <HeaderConquista
            imagemSrc={ph}
            titulo="TITULO"
            subtitulo="SUBTITULO"
          />
          <Espaco altura="10px" />
          <Texto
            texto="TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1 TEXTO 1"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2 TEXTO 2"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Texto
            texto="TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3 TEXTO 3"
            fonte="16px"
            largura="249px"
            alinhamento="left"
          />
          <Espaco altura="20px" />
          <Linha comprimento="100%" cor="black" marginTop="0px" marginBottom ="0px"/>
          <Espaco altura="10px" />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaRoxaImage, texto: "%", tamanhoFonte: "28px"},
            { imagemSrc: fichaRosaImage, texto: "%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaLaranjaImage, texto: "%", tamanhoFonte: "28px"},
            { imagemSrc: fichaAmarelaImage, texto: "%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
          <Porcentagem porcentagens= {[
            { imagemSrc: fichaVerdeImage, texto: "%", tamanhoFonte: "28px", marginRight: "0px"},
          ]}
          />
        </OverlayRectangle>
      </div>
      )}
    </div>
  );
};

export default ConquistasPage;

