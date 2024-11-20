"use client";

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/themes";

interface EmotionThemeProps {
  children: React.ReactNode;
}

const EmotionTheme = ({ children }: EmotionThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EmotionTheme;
