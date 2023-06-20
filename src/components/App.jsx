import React, { Component, ReactPropTypes} from "react";
import Table from "./Table/Table.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: []
    };
  }


  delRow = (rowIndex) => { //deletes a row function
    this.setState((prevState) => { //updating the state in our component based on our prev. state
      let newGrid = prevState.grid.slice(); //our new grid is now a copy of our old one
      newGrid.splice(row.index, 1); //using splice() we can add/remove elements from array 
      return { grid: newGrid };
    });
  }

  delCol = (colIndex) => { //deletes a column function
    this.setState((prevState) => { //update the state in our component based on our prev. state
      let newGrid = prevState.grid.map((row) => {// use map to iterate over each row in the grid
        let newRow = row.slice(); //create a new copy of the row
        newRow.splice(col.index, 1); // Remove the column at index col.index
        return newRow; 
      });
      return { grid: newGrid }; //return the updated new grid  w/o the row
    });
  };

  render() {
    return (
      <div>
        <h1>DOM III + ReactJS: GRID</h1>
        <div>
        <button onClick={addRow} className="btn-rowAdd">+ Row</button>
        <button onClick={() => this.delRow(rowIndex)} className="btn-rowDel">- Row</button>
        <button onClick={addCol} className="btn-colAdd">+ Column</button>
        <button onClick={() => this.delCol(colIndex)} className="btn-colDel">- Column</button>
        <button onClick={fillAllUncoloredCells} className="fillUncolored">Fill All Uncolored Cells</button>
        <button onClick={fillAllCells} className="fillAll">Fill ALL Cells</button>
        <button onClick={clearCells} className="clear">Clear ALL</button>
        <select name="colors" id="colors">
            <option value="color">Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
          </select>
        </div>
          <Table />
        <div>

        </div>
     </div>
    
    );
  };
}