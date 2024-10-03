"use client";
import {
  HeaderContainer,
  HeaderDescription,
  HeaderLeft,
  HeaderRight,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderDescription>회원 관리</HeaderDescription>
      </HeaderLeft>
      <HeaderRight>
        <HeaderDescription>jdy0120@seerslab.com</HeaderDescription>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
