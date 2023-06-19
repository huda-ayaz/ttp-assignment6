import React, { Component, ReactPropTypes } from "react";
import Table from "./Table/Table.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "white",
    };

    this.selectColor = this.selectColor.bind(this);
  }

  //select a color from a dropdown menu of colors
  selectColor = (colors) => {
    this.setState({
      color: colors.target.value,
    });
    console.log(this.state.color); //check in the the console, everytime you select a color it prints the previous color. How to fix?
  };

  /*
    //click on a single cell, changing its color to the currently selected color
    changeCellColor() {
      this.setState({
        color: this.state.color + 1,
      });
    }
*/

  render() {
    return (
      <div>
        <h1>DOM III + ReactJS: GRID</h1>
        <div>
          <button onclick="addRow()" class="btn-rowAdd">
            + Row
          </button>
          <button onclick="delRow()" class="btn-rowDel">
            - Row
          </button>
          <button onclick="addCol()" class="btn-colAdd">
            + Column
          </button>
          <button onclick="delCol()" class="btn-colDel">
            - Column
          </button>
          <button onclick="fillAllUncoloredCells()" class="fillUncolored">
            Fill All Uncolored Cells
          </button>
          <button onclick="fillAllCells()" class="fillAll">
            Fill ALL Cells
          </button>
          <button onclick="clearCells()" class="clear">
            Clear ALL
          </button>
          <select
            id="colors"
            onChange={this.selectColor}
            value={this.state.color}
          >
            <option value="color">Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
          </select>
        </div>
        <Table />
      </div>
    );
  }
}
