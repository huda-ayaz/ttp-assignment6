import React, { Component } from "react";
import "./TableCell.css";

export default class TableCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cell: props.cell,
      color: props.color
    };
  }

  render() {
    return <td class = "Cell"></td>;
  }

}
