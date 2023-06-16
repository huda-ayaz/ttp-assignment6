import React, { Component, ReactPropTypes } from "react";
import Table from "../Table/Table.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>DOM III + ReactJS: GRID</h1>
        <Table />
      </div>
    );
  }
}
