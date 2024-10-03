import { styled } from "../../../styles/themes";

export const HeaderContainer = styled("div", {
  width: "100%",
  height: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$gray800",
});

export const HeaderLeft = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const HeaderRight = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const HeaderDescription = styled("span", {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "-0.025em",
  textAlign: "left",
  color: "$white",
});
