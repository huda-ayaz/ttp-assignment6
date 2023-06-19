import React, { Component, ReactPropTypes } from "react";
import TableCell from "../TableCell/TableCell.jsx";

export default class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: props.row,
      
    }
  }

  render() {
    return (
      <div>
        <TableCell />
      </div>
    );
  }
}
