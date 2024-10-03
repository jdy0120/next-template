import {
  TableBodyType,
  TableHeaderType,
} from "../../../../components/organisms/table/Table";

const header: TableHeaderType[] = [
  {
    id: 1,
    name: "제목",
    key: "title",
    type: "checkbox",
    width: 100,
    isSort: false,
  },
  {
    id: 2,
    name: "제목",
    key: "title",
    type: "text",
    width: 100,
    isSort: true,
  },
  {
    id: 3,
    name: "제목",
    key: "title",
    type: "text",
    width: 100,
    isSort: false,
  },
  {
    id: 4,
    name: "제목",
    key: "title",
    type: "text",
    width: 100,
    isSort: false,
  },
  {
    id: 5,
    name: "제목",
    key: "title",
    type: "text",
    width: 100,
    isSort: false,
  },
];
const body: TableBodyType = {
  rowData: [],
};

export { body, header };
