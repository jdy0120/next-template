"use client";
import { MainStyled } from "./main.styles";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
