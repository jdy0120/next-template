import { styled } from "../../../styles/themes";

export const ToggleContainer = styled("div", {
  display: "inline-flex",
  alignItems: "center",
});

export const ToggleButton = styled("button", {
  width: "44px",
  height: "24px",
  borderRadius: "40px",
  border: "none",
  position: "relative",

  cursor: "pointer",

  variants: {
    disabled: {
      true: {
        backgroundColor: "$gray200",
      },
      false: {
        backgroundColor: "$gray100",
      },
    },
    active: {
      true: {
        backgroundColor: "$primary500",
      },
      false: {
        backgroundColor: "$gray400",
      },
    },
  },
});

export const ToggleCircle = styled("span", {
  display: "block",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "$white",
  position: "absolute",
  top: "2px",
  left: "2px",

  transition: "transform 0.3s ease",

  variants: {
    active: {
      true: {
        transform: "translateX(20px)",
      },
      false: {
        transform: "translateX(0)",
      },
    },
  },
});
