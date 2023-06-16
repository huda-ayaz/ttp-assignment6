import React, { Component } from "react";

export default class TableCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td
        style={{
          backgroundColor: "white",
          padding: "10px",
          width: "12px",
          height: "24px",
          textAlign: "center",
          borderStyle: "solid",
          borderColor: "black",
        }}
      ></td>
    );
  }
}
