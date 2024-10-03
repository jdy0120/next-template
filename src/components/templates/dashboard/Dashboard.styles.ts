import { styled } from "../../../styles/themes";

export const DashboardStyled = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",

  backgroundColor: "$gray50",
});

export const DashboardContent = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  margin: "16px 16px 16px 16px",

  borderRadius: "6px",
  border: "0.5px solid $gray200",
  backgroundColor: "$white",
  padding: "0 20px 0 20px",
});
