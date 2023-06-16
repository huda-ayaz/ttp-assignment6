import React, { Component, ReactPropTypes } from "react";
import TableRow from "../TableRow/TableRow.jsx";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TableRow />
      </div>
    );
  }
}
