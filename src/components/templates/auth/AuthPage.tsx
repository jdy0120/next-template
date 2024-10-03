"use client";
import { AuthPageStyled } from "./AuthPage.styles";

interface AuthPageProps {
  children: React.ReactNode;
}

const AuthPage = ({ children }: AuthPageProps) => {
  return <AuthPageStyled>{children}</AuthPageStyled>;
};

export default AuthPage;
