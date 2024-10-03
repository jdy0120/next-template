import Checkbox from "../../atoms/checkbox/Checkbox";
import { TableBodyType, TableHeaderType } from "../../organisms/table/Table";
import {
  TableBodyCell,
  TableBodyContainer,
  TableBodyRow,
} from "./TableBody.styles";

interface TableBodyProps {
  header: TableHeaderType[];
  body: TableBodyType[];
}

const TableBody = ({ header, body }: TableBodyProps) => {
  return (
    <TableBodyContainer>
      {body.map((item, index) => {
        return (
          <TableBodyRow>
            {header.map((headerItem) => {
              if (headerItem.type === "checkbox") {
                return (
                  <TableBodyCell key={headerItem.id}>
                    <Checkbox />
                  </TableBodyCell>
                );
              }
              return (
                <TableBodyCell key={headerItem.id}>
                  {item.rowData[index][headerItem.key]}
                </TableBodyCell>
              );
            })}
          </TableBodyRow>
        );
      })}
    </TableBodyContainer>
  );
};

export default TableBody;
