import React, { useState } from "react";
import CartasEBotao from "./CartasEBotao";
import Pergunta from "./Pergunta";

// Importe das imagens da pasta 'imgs'
import fundo01 from "../imgs/cenario/c01.png";
import fundo02 from "../imgs/cenario/c02.png";
import fundo03 from "../imgs/cenario/c03.png";
import fundo04 from "../imgs/cenario/c04.png";
import fundo05 from "../imgs/cenario/c05.png";
import fundo06 from "../imgs/cenario/c06.png";
import fundo07 from "../imgs/cenario/c07.png";
import fundo08 from "../imgs/cenario/c08.png";
import fundo09 from "../imgs/cenario/c09.png";
import fundo10 from "../imgs/cenario/c10.png";
import fundo11 from "../imgs/cenario/c11.png";
import fundo12 from "../imgs/cenario/c12.png";
import fundo13 from "../imgs/cenario/c13.png";
import fundo14 from "../imgs/cenario/c14.png";
import fundo15 from "../imgs/cenario/c15.png";

var id = 0;
const cenario = [
  {
    //cenário 01
    fundo: fundo01,
    textoCaixaPequena: "Cenário 01",
    textoCaixaGrande:
      "Uma pessoa está andando muito lentamente na sua frente. Infelizmente, não tem espaço o suficiente para ultrapassar a pessoa na calçada e vocês parecem estar indo para o mesmo lugar.",
    cartaVerde: "Checa por possíveis assaltantes ao redor.",
    cartaAmarela: "Tira suas roupas para a pessoa ficar assustada.",
    cartaLaranja: "Espera ansiosamente por alguém atropelar essa pessoa.",
    cartaRosa: "Agride a pessoa para ela sair da frente.",
    cartaRoxa:
      "Toca um som de sino de bicicleta para ver se a pessoa sai da frente.",
  },

  {
    //cenário 02
    fundo: fundo02,
    textoCaixaPequena: "Cenário 02",
    textoCaixaGrande:
      "Sua aula é no prédio mais alto da faculdade em um dos últimos andares. Você foi o primeiro a chegar e a aula só começa em 30 min.",
    cartaVerde: "Fica o mais longe possível da janela com receio de cair.",
    cartaAmarela: "Desenha algo imprório no quadro.",
    cartaLaranja: "Bagunça a sala toda.",
    cartaRosa: "Quebra alguma coisa da sala.",
    cartaRoxa: "Joga algo pela janela.",
  },

  {
    //cenário 03
    fundo: fundo03,
    textoCaixaPequena: "Cenário 03",
    textoCaixaGrande:
      "Você está esperando o metrô há muito tempo e a estação está ficando cada vez mais cheia.",
    cartaVerde: "Se imagina caindo nos trilhos.",
    cartaAmarela: "Lambe o corrimão.",
    cartaLaranja: "Tenta pular para o outro lado sem cair nos trilhos.",
    cartaRosa: "Empurra alguém nos trilhos.",
    cartaRoxa: "Tenta segurar o metrô com as mãos.",
  },

  {
    //cenário 04
    fundo: fundo04,
    textoCaixaPequena: "Cenário 04",
    textoCaixaGrande:
      "Você está tentando dormir faz 1 hora, mas a criança que mora no andar de cima não para de derrubar seus brinquedos no chão fazendo um barulho bem alto.",
    cartaVerde:
      "Fica com insônia de tanto pensar se vai conseguir dormir novamente.",
    cartaAmarela: "Coloca um som de fantasma para assustar a criança.",
    cartaLaranja: "Começa a brincar também.",
    cartaRosa: "Sobe na casa do vizinho e quebra os brinquedos da criança.",
    cartaRoxa: "Interfona para o vizinho e finge ser o porteiro dando bronca.",
  },

  {
    //cenário 05
    fundo: fundo05,
    textoCaixaPequena: "Cenário 05",
    textoCaixaGrande:
      "Você está esperando para ser atendido no dentista há muito tempo e ele está extremamente atrasado. Na sala só estão você e a secretária. Ao seu lado tem uma mesa cheia de revistas.",
    cartaVerde:
      "Leva o atraso como um sinal de que você nunca mais deve voltar ao dentista.",
    cartaAmarela: "Invade o consultório do dentista.",
    cartaLaranja: "Da em cima da secretária.",
    cartaRosa: "Faz um escândalo até que o dentista venha atendê-lo.",
    cartaRoxa: "Sabota as revistas do consultório.",
  },

  {
    //cenário 06
    fundo: fundo06,
    textoCaixaPequena: "Cenário 06",
    textoCaixaGrande:
      "Você está descendo as escadas da faculdade e no meio do caminho encontra duas pessoas sentadas nos degraus. Não há espaço para continuar sem esbarrar em pelo menos uma delas.",
    cartaVerde:
      "Automaticamente fica paralisado com receio de nunca conseguir descer.",
    cartaAmarela: "Late como se fosse um cachorro.",
    cartaLaranja: "Desce de bunda pelo corrimão.",
    cartaRosa: "Chuta as pessoas para fora do caminho.",
    cartaRoxa: "Assusta os dois que estão sentados.",
  },

  {
    //cenário 07
    fundo: fundo07,
    textoCaixaPequena: "Cenário 07",
    textoCaixaGrande:
      "Você vai para o banheiro e ao entrar na cabine, percebe que a pessoa anterior esqueceu de dar descarga.",
    cartaVerde: "Da a descarga rapidamente para não acharem que foi você.",
    cartaAmarela: "Usa a lixeira ao invés da privada.",
    cartaLaranja: "Tira uma foto e compartilha em busca do culpado.",
    cartaRosa:
      "Acha quem não deu a descarga e enfia a cabeça dessa pessoa na privada.",
    cartaRoxa: "Prova o sabor do conteúdo da privada.",
  },

  {
    //cenário 08
    fundo: fundo08,
    textoCaixaPequena: "Cenário 08",
    textoCaixaGrande:
      "Você está na sua prova da autoescola e acabou de sair da baliza. O 2º instrutor está quase entrando no carro.",
    cartaVerde: "Entra em pânico e deixa o carro morrer.",
    cartaAmarela: "Senta na marcha.",
    cartaLaranja: "Acelera o carro antes do instrutor entrar.",
    cartaRosa: "Atropela o instrutor que te reprovou da última vez.",
    cartaRoxa: "Tranca as portas do carro e não deixa o instrutor entrar.",
  },

  {
    //cenário 09
    fundo: fundo09,
    textoCaixaPequena: "Cenário 09",
    textoCaixaGrande:
      "Você está viajando com os seus amigos de carro e está sentado no banco do carona.",
    cartaVerde:
      "Passa a viagem toda segurando na alça do teto a espera de possíveis acidentes.",
    cartaAmarela:
      "Bota a cabeça e a língua para fora do carro que nem um cachorro.",
    cartaLaranja: "Coloca música evangélica no rádio.",
    cartaRosa: "Abre a porta do carro para derrubar o motoqueiro ao lado.",
    cartaRoxa: "Muda a posição do espelho sem o motorista ver.",
  },

  {
    //cenário 10
    fundo: fundo10,
    textoCaixaPequena: "Cenário 10",
    textoCaixaGrande:
      "Você estava no hospital fazendo um check up e foi liberado para ir para casa. Ao tentar achar a saída, você se perdeu pelos corredores.",
    cartaVerde:
      "Começa a passar mal achando que nunca mais vai conseguir voltar para casa.",
    cartaAmarela: "Dança corredor afora.",
    cartaLaranja: "Pega um jaleco e finge ser médico.",
    cartaRosa: "Chuta todas as portas até achar a saída.",
    cartaRoxa:
      "Se sente como um estudante de medicina e invade o centro cirúrgico.",
  },

  {
    //cenário 11
    fundo: fundo11,
    textoCaixaPequena: "Cenário 11",
    textoCaixaGrande:
      "Você foi com a sua família na missa de domingo. A igreja está insuportavelmente lotada e quente.",
    cartaVerde: "Começa a suar frio achando que todos sabem dos seus pecados.",
    cartaAmarela: "Reza em voz alta para Satã, o grande lorde das trevas.",
    cartaLaranja: "Finge que é o padre e sobe no palanque da igreja.",
    cartaRosa: "Pega a hóstia e joga no padre.",
    cartaRoxa: "Apaga todas as velas da igreja.",
  },

  {
    //cenário 12
    fundo: fundo12,
    textoCaixaPequena: "Cenário 12",
    textoCaixaGrande:
      "Você está viajando sozinho de avião. No momento está escuro e todos estão dormindo.",
    cartaVerde:
      "Dorme com um paraquedas para se preparar para quaisquer problemas de voo.",
    cartaAmarela: "Abre a porta do avião.",
    cartaLaranja: "Fecha todas as janelas do avião.",
    cartaRosa: "Grita e acorde todos no avião.",
    cartaRoxa:
      "Liga a internet do seu celular para testar se realmente dá interferência.",
  },

  {
    //cenário 13
    fundo: fundo13,
    textoCaixaPequena: "Cenário 13",
    textoCaixaGrande:
      "Você mora em um condomínio de casas. Ao sair de casa, você percebe que o seu vizinho pintou a fachada de uma cor horrocartaRosa e você não gostou nem um pouco.",
    cartaVerde:
      "Considere falar com o síndico em busca de uma lei para que os moradores não pintem suas casas com cores horrendas.",
    cartaAmarela:
      "Paga na mesma moeda, pinta a sua casa da cor que o seu vizinho menos gosta.",
    cartaLaranja: "Tira uma foto e compartilha em busca do culpado.",
    cartaRosa: "Repinta você mesmo durante a madrugada.",
    cartaRoxa:
      "Estraga a pintura do vizinho jogando algo molhado ou nojento na fachada.",
  },

  {
    //cenário 14
    fundo: fundo14,
    textoCaixaPequena: "Cenário 14",
    textoCaixaGrande:
      "Você está cuidando de um bebê e ele não para de chorar. Enquanto tentava acalma-lo, seu vizinho começou a reclamar do barulho.",
    cartaVerde:
      "Começa a chorar também com receio de nunca mais conseguir fazer o bebê se acalmar.",
    cartaAmarela: "Joga uma fatia de queijo no rosto do bebê.",
    cartaLaranja: "Vai até o vizinho e faz ele cuidar do bebê.",
    cartaRosa: "Pega um microfone e segura perto do bebê enquanto ele chora.",
    cartaRoxa: "Tampa a boca do bebê para ver se ele para de chorar.",
  },

  {
    //cenário 15
    fundo: fundo15,
    textoCaixaPequena: "Cenário 15",
    textoCaixaGrande:
      "Você está no trânsito e acabou de acontecer um acidente na sua frente.",
    cartaVerde: "Para o carro com receio de que a vitimas são conhecidos seus.",
    cartaAmarela: "Pega um saco de pipoca para assistir.",
    cartaLaranja: "Buzina a melodia do corpo de bombeiros.",
    cartaRosa: "Buzina insistentemente para o trânsito andar.",
    cartaRoxa: "Se pergunta se deve causar um acidente também.",
  },
];

const CenarioPage: React.FC = () => {
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [mostrarPergunta, setShowPergunta] = useState(true);

  const backgroundStyle = {
    backgroundImage: `url(${cenario[id].fundo})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center", // Centralize horizontalmente
    alignItems: "center", // Centralize verticalmente
    cursor: mostrarPergunta ? "pointer" : "default",
  };

  const roxa = "#817BD3";
  const rosa = "#D27AA2";
  const laranja = "#E5A146";
  const amarela = "#F4DB3C";
  const verde = "#A0C172";

  const handleTocarTela = () => {
    if (mostrarPergunta) {
      setMostrarCartas(true);
      setShowPergunta(false);
    }
  };

  const handleBotaoCircularClick = () => {
    if (mostrarCartas) {
      setMostrarCartas(false);
      setShowPergunta(true); // Ative a Pergunta quando o BotaoCircular for clicado
    }
  };

  return (
    <div
      style={backgroundStyle}
      onClick={mostrarPergunta ? handleTocarTela : undefined}
    >
      {mostrarCartas ? ( // Renderize "Pergunta" se mostrarCartas for falso, senão, renderize "CartasEBotao"
        <CartasEBotao
          cartas={[
            { corBorda: roxa, texto: cenario[id].cartaRoxa },
            { corBorda: rosa, texto: cenario[id].cartaRosa },
            { corBorda: laranja, texto: cenario[id].cartaLaranja },
            { corBorda: amarela, texto: cenario[id].cartaAmarela },
            { corBorda: verde, texto: cenario[id].cartaVerde },
          ]}
          rotacao={90}
          textoBotao="confirmar escolha"
          ativadoBotao={false}
          onBotaoCircularClick={handleBotaoCircularClick}
        />
      ) : (
        <Pergunta
          textoCaixaPequena={cenario[id].textoCaixaPequena}
          textoCaixaGrande={cenario[id].textoCaixaGrande}
        />
      )}
    </div>
  );
};

export default CenarioPage;
