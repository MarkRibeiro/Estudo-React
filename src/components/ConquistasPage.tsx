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
import p7 from "../imgs/conquista/7/pequeno.png";
import g7 from "../imgs/conquista/7/grande.png";
import p8 from "../imgs/conquista/8/pequeno.png";
import g8 from "../imgs/conquista/8/grande.png";
import p9 from "../imgs/conquista/9/pequeno.png";
import g9 from "../imgs/conquista/9/grande.png";
import p10 from "../imgs/conquista/10/pequeno.png";
import g10 from "../imgs/conquista/10/grande.png";
import p11 from "../imgs/conquista/11/pequeno.png";
import g11 from "../imgs/conquista/11/grande.png";
import p12 from "../imgs/conquista/12/pequeno.png";
import g12 from "../imgs/conquista/12/grande.png";
import p13 from "../imgs/conquista/13/pequeno.png";
import g13 from "../imgs/conquista/13/grande.png";
import p14 from "../imgs/conquista/14/pequeno.png";
import g14 from "../imgs/conquista/14/grande.png";
import p15 from "../imgs/conquista/15/pequeno.png";
import g15 from "../imgs/conquista/15/grande.png";
import p16 from "../imgs/conquista/16/pequeno.png";
import g16 from "../imgs/conquista/16/grande.png";
import p17 from "../imgs/conquista/17/pequeno.png";
import g17 from "../imgs/conquista/17/grande.png";
import p18 from "../imgs/conquista/18/pequeno.png";
import g18 from "../imgs/conquista/18/grande.png";
import p19 from "../imgs/conquista/19/pequeno.png";
import g19 from "../imgs/conquista/19/grande.png";
import p20 from "../imgs/conquista/20/pequeno.png";
import g20 from "../imgs/conquista/20/grande.png";
import p21 from "../imgs/conquista/21/pequeno.png";
import g21 from "../imgs/conquista/21/grande.png";

// Importe das imagens da pasta 'imgs'
import ph from "../imgs/ph.png";
import fichaAmarelaImage from "../imgs/ficha-amarela.png";
import fichaLaranjaImage from "../imgs/ficha-laranja.png";
import fichaRosaImage from "../imgs/ficha-rosa.png";
import fichaRoxaImage from "../imgs/ficha-roxa.png";
import fichaVerdeImage from "../imgs/ficha-verde.png";
import fichaMulticolorImage from "../imgs/ficha-multicolor.png";
import fichaAmarelaLaranjaRoxaImage from "../imgs/ficha-amarela-laranja-roxa.png";
import fichaVerdeRosaRoxaImage from "../imgs/ficha-verde-rosa-roxa.png";
import fichaLaranjaRosaRoxaImage from "../imgs/ficha-laranja-rosa-roxa.png";
import fichaVerdeAmarelaRosaImage from "../imgs/ficha-verde-amarela-rosa.png";
import fichaLaranjaAmarelaVerdeImage from "../imgs/ficha-laranja-amarela-verde.png";
import fichaVerdeLaranjaRoxaImage from "../imgs/ficha-verde-laranja-roxa.png";
import fichaVerdeRosaLaranjaImage from "../imgs/ficha-verde-rosa-laranja.png";
import fichaAmarelaLaranjaRosaImage from "../imgs/ficha-amarela-laranja-rosa.png";
import fichaAmarelaRosaRoxaImage from "../imgs/ficha-amarela-rosa-roxa.png";
import fichaVerdeAmarelaRoxaImage from "../imgs/ficha-verde-amarela-roxa.png";

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

  const showRectangle = (
    conquista: { ativado: boolean },
    setActiveFunction: (active: boolean) => void
  ) => {
    if (conquista.ativado) {
      setActiveFunction(true);
    }
  };

  const hideRectangle = (setRectangleActive: (active: boolean) => void) => {
    setRectangleActive(false);
  };

  const conquistasLinha1 = [
    {
      imagem: p1,
      ativado: true,
      onClick: () => {
        showRectangle(conquistasLinha1[0], setRectangle1Active);
      },
    },
    {
      imagem: p2,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha1[1], setRectangle2Active);
      },
    },
    {
      imagem: p3,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha1[2], setRectangle3Active);
      },
    },
    {
      imagem: p4,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha1[3], setRectangle4Active);
      },
    },
  ];
  const conquistasLinha2 = [
    {
      imagem: p5,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha2[0], setRectangle5Active);
      },
    },
    {
      imagem: p6,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha2[1], setRectangle6Active);
      },
    },
    {
      imagem: p7,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha2[2], setRectangle7Active);
      },
    },
    {
      imagem: p8,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha2[3], setRectangle8Active);
      },
    },
  ];
  const conquistasLinha3 = [
    {
      imagem: p9,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha3[0], setRectangle9Active);
      },
    },
    {
      imagem: p10,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha3[1], setRectangle10Active);
      },
    },
    {
      imagem: p11,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha3[2], setRectangle11Active);
      },
    },
    {
      imagem: p12,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha3[3], setRectangle12Active);
      },
    },
  ];
  const conquistasLinha4 = [
    {
      imagem: p13,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha4[0], setRectangle13Active);
      },
    },
    {
      imagem: p14,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha4[1], setRectangle14Active);
      },
    },
    {
      imagem: p15,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha4[2], setRectangle15Active);
      },
    },
    {
      imagem: p16,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha4[3], setRectangle16Active);
      },
    },
  ];
  const conquistasLinha5 = [
    {
      imagem: p17,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha5[0], setRectangle17Active);
      },
    },
    {
      imagem: p18,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha5[1], setRectangle18Active);
      },
    },
    {
      imagem: p19,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha5[2], setRectangle19Active);
      },
    },
    {
      imagem: p20,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha5[3], setRectangle20Active);
      },
    },
  ];
  const conquistasLinha6 = [
    {
      imagem: p21,
      ativado: false,
      onClick: () => {
        showRectangle(conquistasLinha6[0], setRectangle21Active);
      },
    },
  ];

  var totalConquistas = conquistasLinha1.concat(
    conquistasLinha2,
    conquistasLinha3,
    conquistasLinha4,
    conquistasLinha5,
    conquistasLinha6
  );

  return (
    <div>
      <HeaderConquistasPage nomeUsuario={"nome de usuário"} />
      <Espaco altura="50px" />
      <TextosEmLinha
        textoEsquerda="conquistas"
        textoDireita={
          totalConquistas.filter((conquista) => conquista.ativado).length +
          "/" +
          totalConquistas.length
        }
        largura="337px"
      />
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
      {isRectangleActive1 && ( //o diabo
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "100%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive2 && ( //o esquisito
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "100%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive3 && ( //o medroso
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "100%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive4 && ( //o focado
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "100%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive5 && ( //o curioso
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "100%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive6 && ( //mix de frutas
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
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaMulticolorImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive7 && ( //o escritor
        <div onClick={() => hideRectangle(setRectangle7Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive7}>
            <HeaderConquista
              imagemSrc={g7}
              titulo="o escritor"
              subtitulo="bela caligrafia"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Dia agitado?** Percebe-se."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Da pra notar que você é uma pessoa bem estressada. Algo está te tirando do sério quase que completamente. Pelo menos ainda tem espaço para outras emoções ai dentro."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Yoga faz bem pra relaxar. Sabe o que também ajuda? Um belo caderno preto pra você escrever o nome dos responsáveis..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRosaImage,
                  texto: "60% -",
                  tamanhoFonte: "28px",
                  marginRight: "4px",
                },
                {
                  imagemSrc: fichaRosaImage,
                  texto: "80%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive8 && ( //ciêntista maluco
        <div onClick={() => hideRectangle(setRectangle8Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive8}>
            <HeaderConquista
              imagemSrc={g8}
              titulo="ciêntista maluco"
              subtitulo="estranhamente excêntrico"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Qual a maluquice de hoje?**"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente criativa, mas parece que nem sempre é a criatividade que aparece!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Cuidado com suas ideias e pensamentos mirabolantes, não queremos acabar explodindo nada, certo? ...certo?"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "60% -",
                  tamanhoFonte: "28px",
                  marginRight: "4px",
                },
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "80%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive9 && ( //o grisalho
        <div onClick={() => hideRectangle(setRectangle9Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive9}>
            <HeaderConquista
              imagemSrc={g9}
              titulo="o grisalho"
              subtitulo="sempre preocupado"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**AAAAAAh!** Que susto, né? Seus índices de medo estão altíssimos!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa frequentemente preocupada com muitas coisas, mas de vez em nunca as preocupações dão lugar a outras sensações."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Fique de olho, se continuar assim vai ficar com cabelos brancos antes da hora!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "60% -",
                  tamanhoFonte: "28px",
                  marginRight: "4px",
                },
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "80%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive10 && ( //o stalker
        <div onClick={() => hideRectangle(setRectangle10Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive10}>
            <HeaderConquista
              imagemSrc={g10}
              titulo="o stalker"
              subtitulo="foco em ascensão"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Foco?** Acho que você tem o suficiente disso."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa bastante presente no momento, mas de vez em nunca outros coisas tiram seu foco."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Dividir esse foco para as pessoas ao seu redor pode ser interessante! Só cuidado para não foca demais e ser considerado um stalker."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "60% -",
                  tamanhoFonte: "28px",
                  marginRight: "4px",
                },
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "80%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive11 && ( //o gato?
        <div onClick={() => hideRectangle(setRectangle11Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive11}>
            <HeaderConquista
              imagemSrc={g11}
              titulo="o gato?"
              subtitulo="acho que não"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**A curiosidade matou o gato.** Ainda bem que você não é um!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa bem curiosa, mas recentemente outras emoções começaram a aparecer na sua vida."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Continue assim! Só fique ciente de que quem foca demais na curiosidade pode acabar descobrindo coisas que não deveria saber..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "60% -",
                  tamanhoFonte: "28px",
                  marginRight: "4px",
                },
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "80%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive12 && ( //o frouxo
        <div onClick={() => hideRectangle(setRectangle12Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive12}>
            <HeaderConquista
              imagemSrc={g12}
              titulo="o frouxo"
              subtitulo="inofensivamente irritado"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Medrosamente estressado!** Não sabe se grita ou se esconde..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente medrosa e bastante estressada. Lado bom? Provavelmente nunca vai bater em ninguém com medo de ser batido de volta!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Parabéns, você ganhou a medalha de inofensivo! Continue assim! Não queremos perigos, não é mesmo?"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRosaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaLaranjaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive13 && ( //o artista
        <div onClick={() => hideRectangle(setRectangle13Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive13}>
            <HeaderConquista
              imagemSrc={g13}
              titulo="o artista"
              subtitulo="distribuindo autógrafos"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Foco na criatividade!** Sai de baixo, chegou o artista. "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente focada e criativa, já pensou em ser artista? Seu perfil super encaixa!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Já avisando, se for seguir essa carreia, eu quero um autógrafo. Pra quê? Pra vender no futuro, é claro!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeRosaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive14 && ( //o gambiarista
        <div onClick={() => hideRectangle(setRectangle14Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive14}>
            <HeaderConquista
              imagemSrc={g14}
              titulo="o gambiarista"
              subtitulo="resolvendo catástrofes"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Medrosamente criativo!** Seja bem vindo, mestre da gambiarra!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa lotada de preocupações e de alguma forma, sempre consegue criar maneiras criativas de resolver as situações. "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Falando nisso, não quer me ajudar a resolver um probleminha aqui não? Haha.."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaRosaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive15 && ( //o perseguidor
        <div onClick={() => hideRectangle(setRectangle15Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive15}>
            <HeaderConquista
              imagemSrc={g15}
              titulo="o perseguidor"
              subtitulo="nenhuma dúvida escapará"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Foco na curiosidade!** Extremamente obstinado. Talvez até demais... "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente focada e curiosa. Quando fica com alguma dúvida, você não para até saber a reposta! "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Já viu a série “YOU”? Acho que você poderia ser o protagonista. Ele não para de perseguir sua vítima até entender tudo sobre ela :)"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeAmarelaRosaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive16 && ( //o esquentado
        <div onClick={() => hideRectangle(setRectangle16Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive16}>
            <HeaderConquista
              imagemSrc={g16}
              titulo="o esquentado"
              subtitulo="descobrindo a irritação"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Curiosamente estressado!** Dizem que a curiosidade matou o gato, mas acho que foi você mesmo... "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente curiosa e isso parece te causar bastante estresse. Dica, se não aguenta descobrir alguma coisa, não pergunte! "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Te ensinar outro ditado que pode ser mais útil pra você: “a ignorância é uma benção”!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaRosaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaAmarelaVerdeImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive17 && ( //o torturador
        <div onClick={() => hideRectangle(setRectangle17Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive17}>
            <HeaderConquista
              imagemSrc={g17}
              titulo="o torturador"
              subtitulo="a arte da irritação"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Criativamente estressado!** Uma tortura nunca foi tão criativa. "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente criativa que pensa em diversas formas diferentes de lidar com o estresse. Só não esqueça que essa criatividade não deve ser usada contra ninguém! "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="De qualquer forma, lembre-me de nunca pisar no seu calo. Sabe-se lá o que passa pela sua cabeça..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRosaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeLaranjaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive18 && ( //o sucesso
        <div onClick={() => hideRectangle(setRectangle18Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive18}>
            <HeaderConquista
              imagemSrc={g18}
              titulo="o sucesso"
              subtitulo="seguindo receitas"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Curiosamente criativo!** Estamos presenciando um futuro sucesso?"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Bela combinação! Você é uma pessoa naturalmente curiosa e criativa. Com certeza o perfil certo para se dar bem em muitos cargos por ai."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você tem a faca e o queijo na mão, agora siga a receita para o sucesso! Espera, o quê?! Como assim não tem receita??"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeRosaLaranjaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive19 && ( //bate botas
        <div onClick={() => hideRectangle(setRectangle19Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive19}>
            <HeaderConquista
              imagemSrc={g19}
              titulo="bate botas"
              subtitulo="o coração até para"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Medrosamente curioso!** Cuidado com suas descobertas! "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa bastante curiosa, mas de alguma forma suas descobertas te deixam lotado de preocupações. "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Uma dica, cuide do coração! Algum dia desses você pode levar um susto tão grande com o que descobrir que vai bater as botas..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaRoxaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaLaranjaRosaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive20 && ( //o ninja
        <div onClick={() => hideRectangle(setRectangle20Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive20}>
            <HeaderConquista
              imagemSrc={g20}
              titulo="o ninja"
              subtitulo="aprendendo a correr"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Medrosamente focado!** Já pensou em ser um ninja? "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa focada e cheia de preocupações. De alguma forma, seu foco é completamente voltado para se esconder de seus problemas. E até que você é bom nisso, quase como um ninja se escondendo nas sombras! "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Talvez ao invés de ninja, você devesse se inspirar no Indiana Jones. Por quê? Ué, claramente porque quando a bola gigante de problemas vier atrás de você, é melhor que você saiba correr..."
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaVerdeImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaAmarelaRosaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
      {isRectangleActive21 && ( //o agiota
        <div onClick={() => hideRectangle(setRectangle21Active)}>
          <BackgroundOverlay />
          <OverlayRectangle active={isRectangleActive21}>
            <HeaderConquista
              imagemSrc={g21}
              titulo="o agiota"
              subtitulo="cobrando até a alma"
            />
            <Espaco altura="10px" />
            <Texto
              texto="**Estressadamente focado!** Talvez você devesse ser um agiota... "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Você é uma pessoa naturalmente focada e isso parece te causar bastante estresse. Dica, tenta se cobrar um pouco menos. Até mesmo os agiotas entendem que cobrar em excesso faz o cliente fugir. "
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Texto
              texto="Se continuar se cobrando assim, quem vai fugir de você é a saúde. Pense nisso!"
              fonte="16px"
              largura="249px"
              alinhamento="left"
            />
            <Espaco altura="20px" />
            <Linha
              comprimento="100%"
              cor="black"
              marginTop="0px"
              marginBottom="0px"
            />
            <Espaco altura="10px" />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaRosaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                },
                {
                  imagemSrc: fichaLaranjaImage,
                  texto: "40%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
            <Porcentagem
              porcentagens={[
                {
                  imagemSrc: fichaVerdeAmarelaRoxaImage,
                  texto: "20%",
                  tamanhoFonte: "28px",
                  marginRight: "0px",
                },
              ]}
            />
          </OverlayRectangle>
        </div>
      )}
    </div>
  );
};

export default ConquistasPage;
