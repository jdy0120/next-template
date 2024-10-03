import { styled } from "../../../styles/themes";

export const TableHeadContainer = styled("thead", {
  backgroundColor: "$gray100",
});

export const TableHeadRow = styled("tr", {});

export const TableHeadCell = styled("th", {
  height: "48px",
  verticalAlign: "middle",
  textAlign: "center",

  cursor: "pointer",

  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "-0.025em",
});
