"use client";
import { useState } from "react";
import { ToggleButton, ToggleCircle, ToggleContainer } from "./Toggle.styles";

interface ToggleProps {
  isActive: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Toggle = () => {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <ToggleContainer>
      <ToggleButton active={isActive} onClick={handleToggle}>
        <ToggleCircle active={isActive} />
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
