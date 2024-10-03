"use client";
import TableBody from "../../molecules/tablebody/TableBody";
import TableHead from "../../molecules/tablehead/TableHead";
import { TableContainer } from "./Table.styles";

interface TableHeaderType {
  id: number;
  key: string;
  name: string;
  width: number;
  isSort: boolean;
  type: "checkbox" | "text";
  onClick?: () => void;
}

interface TableBodyType {
  rowData: any[];
}

interface TableProps {
  header: TableHeaderType[];
  body: TableBodyType;
}

const Table = ({ header, body }: TableProps) => {
  return (
    <TableContainer>
      <colgroup>
        {header.map((item) => {
          return <col width={item.width} key={item.id} />;
        })}
      </colgroup>
      <TableHead header={header} />
      <TableBody header={header} body={body.rowData} />
    </TableContainer>
  );
};

export default Table;
export type { TableBodyType, TableHeaderType };
