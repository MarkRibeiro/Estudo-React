import React from "react";

interface PerguntaProps {
  textoCaixaPequena: string;
  textoCaixaGrande: string;
}

const Pergunta: React.FC<PerguntaProps> = ({ textoCaixaPequena, textoCaixaGrande }) => {
  return (
    <div style={{ transform: "rotate(90deg)", height: "100vw", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div style={{ paddingTop: "10px", color: "white", background: "black", borderRadius: "9px 9px 0 0", fontSize: "20px", width: "120px", height: "49px", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "59px" }}>
        <p>{textoCaixaPequena}</p>
      </div>
      <div style={{ background: "white", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", borderRadius: "0 9px 9px 9px", width: "90vh", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <p>{textoCaixaGrande}</p>
      </div>
      <div style={{ textAlign: "right", color: "white", paddingTop: "10px" }}>
        <p style={{ background: "none" }}>{"clique para continuar"}</p>
      </div>
    </div>
  );
};

export default Pergunta;
