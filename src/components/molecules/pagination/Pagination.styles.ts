import { styled } from "../../../styles/themes";

export const PaginationContainer = styled("div", {
  width: "500px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px;",
});

export const PaginationButton = styled("button", {
  width: "32px",
  height: "32px",
  border: "none",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",

  fontFamily: "Pretendard",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "-0.025em",
  textAlign: "center",
  color: "$gray900",

  "&:hover": {
    backgroundColor: "$gray100",
  },

  variants: {
    isSelected: {
      true: {
        fontWeight: "700",
      },
    },
  },
});
