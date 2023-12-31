import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ConquistasPage from "./components/ConquistasPage";
import GamePage from "./components/GamePage";
import CenarioPage from "./components/CenarioPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/conquistas" element={<ConquistasPage />} />
      <Route path="/jogo" element={<GamePage />} />
      <Route path="/cenario" element={<CenarioPage />} />
    </Routes>
  );
};

export default App;
