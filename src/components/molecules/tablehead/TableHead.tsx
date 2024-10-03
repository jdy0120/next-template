import Checkbox from "../../atoms/checkbox/Checkbox";
import { TableHeaderType } from "../../organisms/table/Table";
import {
  TableHeadCell,
  TableHeadContainer,
  TableHeadRow,
} from "./TableHead.styles";

interface TableHeadProps {
  header: TableHeaderType[];
}

const TableHead = ({ header }: TableHeadProps) => {
  return (
    <TableHeadContainer>
      <TableHeadRow>
        {header.map((item) => {
          if (item.type === "checkbox") {
            return (
              <TableHeadCell key={item.id}>
                <Checkbox />
              </TableHeadCell>
            );
          }
          return (
            <TableHeadCell key={item.id}>
              <span>{item.name}</span>
              {item.isSort && "<"}
            </TableHeadCell>
          );
        })}
      </TableHeadRow>
    </TableHeadContainer>
  );
};

export default TableHead;
