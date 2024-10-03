"use client";

import { PaginationButton, PaginationContainer } from "./Pagination.styles";
import Left from "/public/assets/icons/arrow_left.svg";
import Right from "/public/assets/icons/arrow_right.svg";
import DoubleLeft from "/public/assets/icons/double_arrow_left.svg";
import DoubleRight from "/public/assets/icons/double_arrow_right.svg";

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationButton>
        <DoubleLeft />
      </PaginationButton>
      <PaginationButton>
        <Left />
      </PaginationButton>
      <PaginationButton isSelected>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton>6</PaginationButton>
      <PaginationButton>7</PaginationButton>
      <PaginationButton>8</PaginationButton>
      <PaginationButton>9</PaginationButton>
      <PaginationButton>10</PaginationButton>
      <PaginationButton>
        <Right />
      </PaginationButton>
      <PaginationButton>
        <DoubleRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
