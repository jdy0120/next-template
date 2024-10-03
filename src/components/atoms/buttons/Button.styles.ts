import { styled } from "../../../styles/themes";

export const ButtonStyled = styled("button", {
  // size
  borderRadius: "8px",

  cursor: "pointer",
  border: "none",

  // font
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "-0.025em",
  textAlign: "center",

  variants: {
    size: {
      small: {
        width: "120px",
        height: "32px",
      },
      medium: {
        width: "180px",
        height: "48px",
      },
      large: {
        width: "100%",
        height: "56px",
      },
    },
    color: {
      primary: {
        backgroundColor: "$primary400",
        color: "$white",

        "&:hover": {
          backgroundColor: "$primary500",
        },
      },
      secondary: {
        backgroundColor: "$primary100",
        color: "$primary400",

        "&:hover": {
          backgroundColor: "$primary200",
        },
      },
      outlined: {
        backgroundColor: "$primary50",
        color: "$primary400",
        border: "1px solid $primary200",

        "&:hover": {
          backgroundColor: "$primary100",
        },
      },
      disabled: {
        backgroundColor: "$gray50",
        color: "$black",
        opacity: "0.3",
      },
      default: {
        backgroundColor: "$gray100",
        color: "$black",

        "&:hover": {
          backgroundColor: "$gray50",
        },
      },
    },
  },
});
