import React from "react";
import Conquista from "./Conquista";

interface ConquistasEmLinhaProps {
  conquistas: { imagem: string; ativado: boolean; onClick: () => void }[]; // Recebe um array de objetos com imagem, status ativado e função onClick
}

const ConquistasEmLinha: React.FC<ConquistasEmLinhaProps> = ({ conquistas }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "10px" }}>
      {conquistas.map((conquista, index) => (
        <Conquista
          key={index}
          ativado={conquista.ativado}
          imagem={conquista.imagem}
          onClick={conquista.onClick} // Passe a função onClick
        />
      ))}
    </div>
  );
};

export default ConquistasEmLinha;
