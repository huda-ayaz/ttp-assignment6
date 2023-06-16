import React, { Component, ReactPropTypes } from "react";
import TableRow from "../TableRow/TableRow.jsx";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowNum: 1,
      colNum: 1
    }

    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
  }

  render() {
    return (
      <div>
        <TableRow />
      </div>
    );
  }

  addRow(event) {
    this.setState({
      rowNum: this.state.rowNum + 1
    })
  }

  addCol(event) {
    this.setState({
      colNum: this.state.colNum + 1
    })
  }
}
