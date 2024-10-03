"use client";

import { ButtonStyled } from "./Button.styles";
import { ButtonColor, ButtonSize, ButtonVariantProps } from "./Button.variant";

interface ButtonProps extends ButtonVariantProps {
  size?: ButtonSize;
  color?: ButtonColor;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ color, size, children, onClick }: ButtonProps) => {
  return (
    <ButtonStyled color={color} size={size} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
