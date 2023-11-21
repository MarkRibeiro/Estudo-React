import React, { useState } from "react";

interface LoginProps {
  usernameLabel: string;
  passwordLabel: string;
  inputWidth: string;
  inputHeight: string;
}

const Login: React.FC<LoginProps> = ({
  usernameLabel,
  passwordLabel,
  inputWidth,
  inputHeight,
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centraliza horizontalmente
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px", // Espaçamento inferior para separar os inputs
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "0px", // Margem inferior para as labels
    marginLeft: "10px", // Margem esquerda para as labels
  };

  const inputStyle: React.CSSProperties = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: "9px", // Adiciona borda arredondada
    backgroundColor: "#6D6D6D", // Define a cor de fundo como #6D6D6D
    border: "none", // Remove a borda padrão
    boxShadow: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // Adiciona uma sombra interna
    color: "white", // Define a cor do texto como branco
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={containerStyle}>
      <div style={inputContainerStyle}>
        <label htmlFor="username" style={labelStyle}>{usernameLabel}</label>
        <input type="text" id="username" style={inputStyle} onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu usuário" />
      </div>

      <div style={inputContainerStyle}>
        <label htmlFor="password" style={labelStyle}>{passwordLabel}</label>
        <input type="password" id="password" style={inputStyle} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
      </div>
    </div>
  );
};

export default Login;
