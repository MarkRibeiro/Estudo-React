import React from "react";
import Imagem from "./Imagem";
import Espaco from "./Espaco";
import Botao from "./Botao";
import ImagensEmLinha from "./ImagensEmLinha";
import Login from "./Login";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { createNewUser } from "../database";

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

const SignupPage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: "black", // Define a cor de fundo como preto
    color: "white", // Define a cor do texto como branco (para melhor visibilidade)
    minHeight: "100vh", // Garante que a página tenha pelo menos a altura da janela de visualização
    padding: "20px", // Adiciona um preenchimento para espaçamento interno
  };

  const navigate = useNavigate();

  const HandleClick = (username: string, password: string) => {
    //createNewUser(username, password);
  };

  return (
    <div style={pageStyle}>
      <Espaco altura="20px" />
      <Imagem src={logoImage} altura="237px" largura="230px" />
      <Espaco altura="80px" />
      <Login
        usernameLabel="Usuário"
        passwordLabel="Senha"
        inputWidth="287px"
        inputHeight="51px"
      />
      <Espaco altura="50px" />
      <Botao
        texto="criar conta"
        onClick={() => HandleClick("Arthur", "@Senha123")}
        largura="287px"
        altura="50px"
        corTexto="black"
        corCaixa="white"
      />
      <Espaco altura="100px" />
      <ImagensEmLinha imagens={imagens} distancia="30px" />
    </div>
  );
};

export default SignupPage;
