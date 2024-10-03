import { styled } from "../../../styles/themes";

// 체크박스 스타일
const CheckboxContainer = styled("label", {
  display: "inline-block",
  width: "20px",
  height: "20px",
  cursor: "pointer",
});

const CheckboxInput = styled("input", {
  display: "none", // 기본 input 숨김

  // 체크박스가 선택되었을 때 스타일
  "&:checked + div": {
    backgroundColor: "$primary400", // 선택 시 배경 색상
    borderColor: "$primary400",
  },
});

const CheckboxBox = styled("div", {
  width: "20px",
  height: "20px",
  borderRadius: "5px",
  border: "2px solid $gray300",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s, border-color 0.2s",

  // 체크 시 표시
  "&:before": {
    content: '""',
    display: "none",
    width: "14px",
    height: "14px",
    position: "absolute",
    backgroundImage: 'url("/assets/icons/arrow.svg")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  // 체크 상태에 따라 표시
  [`${CheckboxInput}:checked + &::before`]: {
    display: "block",
  },
});

export { CheckboxBox, CheckboxContainer, CheckboxInput };
