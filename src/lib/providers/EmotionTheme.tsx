"use client";

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/themes";
import GlobalStyle from "../../styles/themes/global";

interface EmotionThemeProps {
  children: React.ReactNode;
}

const EmotionTheme = ({ children }: EmotionThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default EmotionTheme;
