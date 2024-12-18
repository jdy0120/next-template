import "@emotion/react";

interface Colors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface White {
  default: string;
  info: string;
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      white: White;
      gray: Colors;
      negative: string;
    };
  }
}
