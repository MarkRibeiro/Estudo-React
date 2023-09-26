import React from "react";

interface OverlayRectangleProps {
  children: React.ReactNode;
  active: boolean;
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  width: "291px",
  backgroundColor: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
  border: "1px solid #000",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  visibility: "visible",
  opacity: 1,
  transition: "visibility 0.3s, opacity 0.3s",
};

const OverlayRectangle: React.FC<OverlayRectangleProps> = ({
  children,
  active,
}) => {
  const visibility = active ? "visible" : "hidden";

  const updatedStyle: React.CSSProperties = {
    ...overlayStyle,
    visibility,
  };

  return <div style={updatedStyle}>{children}</div>;
};

export default OverlayRectangle;
