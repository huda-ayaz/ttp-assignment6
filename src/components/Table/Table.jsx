import React, { useState, Component, ReactPropTypes } from "react";
import { useEffect } from "react";
import TableRow from "../TableRow/TableRow.jsx";

const Table = ({ rowNum, colNum }) => {
  const [rows, setRows] = useState(1);

  const repeatRows = () => {
    const rowsArray = Array.from({ length: rowNum }, (_, index) => index);
    return rowsArray.map((item) => (
      <TableRow colNum={colNum}/>
    ));
  };

  useEffect = () => {
    setRows(rowNum);
  }

  return (
    <div>
      {repeatRows()}
    </div>
  );
}

export default Table;
