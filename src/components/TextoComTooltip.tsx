import React from "react";
import tooltipImage from "../imgs/tooltip.png";

type TextoComTooltipProps = {
  texto: string;
  alarmeOnClick: () => void;
};

const TextoComTooltip: React.FC<TextoComTooltipProps> = ({
  texto,
  alarmeOnClick,
}) => {
  const tooltipStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    marginTop: "23px",
    fontSize: "24px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <span onClick={alarmeOnClick} style={tooltipStyle}>
        {texto}
        <img
          src={tooltipImage}
          alt="Ícone"
          style={{ marginLeft: "10px", width: "24px", height: "24px" }}
        />
      </span>
    </div>
  );
};

export default TextoComTooltip;
