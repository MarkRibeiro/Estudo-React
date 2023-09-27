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
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  visibility: "visible",
  opacity: 1,
  transition: "visibility 0.3s, opacity 0.3s",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
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
