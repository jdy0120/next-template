"use client";

import { useRef } from "react";
import { InputContainerStyled, InputStyled, LabelStyled } from "./Input.styles";
import { InputVariants } from "./Input.variants";

interface InputProps extends InputVariants {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, value, onChange }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
  };

  return (
    <InputContainerStyled onClick={handleClick}>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={value}
        variant="selected"
        onChange={onChange}
      />
    </InputContainerStyled>
  );
};

export default Input;
