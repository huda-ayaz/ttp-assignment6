import React, { useState, Component, ReactPropTypes } from "react";
import { useEffect } from "react";
import TableCell from "../TableCell/TableCell.jsx";

const TableRow = ({ colNum }) => {
  const [cols, setCols] = useState(1);

  const repeatCols = () => {
    const colsArray = Array.from({ length: colNum }, (_, index) => index);
    return colsArray.map((item) => (
      <TableCell/>
    ));
  };

  useEffect = () => {
    setCols(colNum);
  }

  return (
    <div>
      {repeatCols()}
    </div>
  );
}

export default TableRow;
