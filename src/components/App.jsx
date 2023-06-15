import React, { Component, ReactPropTypes } from "react";
import Table from "./Table.jsx";
import TableCell from "./TableCell.jsx";
import TableRow from "./TableRow.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        This is a Test!
        <Table />
      </h1>
    );
  }
}
