import { styled } from "../../../../styles/themes";

export const InputStyled = styled("input", {
  width: "calc(100% - 18px)",
  height: "52px",
  borderRadius: "8px",
  border: "1px solid $gray100",
  padding: "0",
  paddingLeft: "16px",

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
    variant: {
      selected: {
        borderColor: "$gray500",
      },
      success: {
        borderColor: "$blue",
      },
      error: {
        borderColor: "$red",
      },
      inputed: {
        borderColor: "$gray500",
      },
      default: {
        borderColor: "$gray200",
      },
    },
  },
});

export const LabelStyled = styled("label", {
  //styleName: Body/B2_Md;
  fontFamily: "Pretendard",
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "20px",
  letterSpacing: "-0.025em",
  textAlign: "left",
});

export const InputContainerStyled = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
