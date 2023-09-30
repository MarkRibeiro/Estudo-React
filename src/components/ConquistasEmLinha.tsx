import React from "react";
import Conquista from "./Conquista";

interface ConquistasEmLinhaProps {
  conquistas: { imagem: string; ativado: boolean; onClick: () => void }[]; // Recebe um array de objetos com imagem, status ativado e função onClick
}

const ConquistasEmLinha: React.FC<ConquistasEmLinhaProps> = ({ conquistas }) => {
  return (
    <div style={{ display: "flex", marginLeft: "auto", marginRight: "auto", width: "355px" }}>
      {conquistas.map((conquista, index) => (
        <div key={index} style={{ marginRight: index < conquistas.length - 1 ? "10px" : "0" }}>
          <Conquista
            ativado={conquista.ativado}
            imagem={conquista.imagem}
            onClick={conquista.onClick} // Passe a função onClick
          />
        </div>
      ))}
    </div>
  );
};

export default ConquistasEmLinha;
