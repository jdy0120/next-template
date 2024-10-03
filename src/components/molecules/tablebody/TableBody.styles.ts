import { styled } from "../../../styles/themes";

export const TableBodyContainer = styled("tbody", {});

export const TableBodyRow = styled("tr", {
  "&:hover": {
    backgroundColor: "$primary50",
  },
});

export const TableBodyCell = styled("td", {
  height: "48px",
  verticalAlign: "middle",
  textAlign: "center",

  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "-0.025em",
});
