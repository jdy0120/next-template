import { styled } from "../../../styles/themes";

export const ModalContainer = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ModalContent = styled("div", {
  width: "320px",
  backgroundColor: "white",
  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
});

export const ModalContentText = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ModalButtonGroup = styled("div", {
  width: "100%",
  height: "40px",

  display: "flex",
  justifyContent: "space-betweem",
  alignItems: "center",
  borderTop: "1px solid #E0E0E0",
});
