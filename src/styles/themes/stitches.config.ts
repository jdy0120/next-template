// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#FAFAFA",
      black: "#111111",
      red: "#F04438",
      orange: "#FF9500",
      yellow: "#FFCC00",
      green: "#12B76A",
      blue: "#2E90FA",

      primary50: "#EEEFFF",
      primary100: "#DEE0FF",
      primary200: "#BCC1FF",
      primary300: "#7982FF",
      primary400: "#525DEF",
      primary500: "#4650D5",
      primary600: "#353DAC",
      primary700: "#232982",
      primary800: "#121659",
      primary900: "#090D44",

      gray50: "#F5F7FA",
      gray100: "#E5E9ED",
      gray200: "#CFD3D9",
      gray300: "#C0C5CD",
      gray400: "#A2A8B5",
      gray500: "#848C9D",
      gray600: "#667085",
      gray700: "#525A6A",
      gray800: "#3D4350",
      gray900: "#111111",
    },
    fonts: {},
    background: {},
    line: {},
  },
  media: {
    bp1: "(min-width: 480px)",
  },
});
