"use client";

import { useState } from "react";
import Button from "../../../components/atoms/buttons/Button";
import Checkbox from "../../../components/atoms/checkbox/Checkbox";
import Input from "../../../components/atoms/inputs/input/Input";
import Modal from "../../../components/atoms/modal/Modal";
import Toggle from "../../../components/atoms/toggle/Toggle";
import Pagination from "../../../components/molecules/pagination/Pagination";
import Table from "../../../components/organisms/table/Table";
import { body, header } from "./datas/tableDatas";

const page = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button color="primary" size="large">
        Button
      </Button>
      <Input
        label="Label"
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Toggle />
      <Checkbox />
      <Table header={header} body={body} />
      <Pagination />
      <Button color="primary" onClick={() => setIsOpen((prev) => !prev)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} type="default">
        1
      </Modal>
    </div>
  );
};

export default page;
