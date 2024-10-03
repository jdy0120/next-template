"use client";

import { useEffect } from "react";
import {
  ModalButtonGroup,
  ModalContainer,
  ModalContent,
  ModalContentText,
} from "./Modal.styles";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  type: "default" | "confirm" | "alert";
}

const Modal = ({ children, isOpen, onClose, type }: ModalProps) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (type === "default") {
      const interval = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [type, onClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer onClick={handleClickOutside}>
      <ModalContent>
        <ModalContentText>{children}</ModalContentText>
        {type === "confirm" && (
          <ModalButtonGroup>
            <p onClick={onClose}>취소</p>
            <p>확인</p>
          </ModalButtonGroup>
        )}
        {type === "alert" && (
          <ModalButtonGroup>
            <p onClick={onClose}>닫기</p>
          </ModalButtonGroup>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
