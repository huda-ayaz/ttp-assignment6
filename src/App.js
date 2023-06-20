import "./App.css";
import Table from "./components/Table/Table";
import React, { useState, useEffect, ReactPropTypes } from "react";

// import { AppFace } from "./components/App.jsx";

function App() {
  const[rows, setRows] = useState(1);
  const[cols, setCols] = useState(1);
  const[color, setColor] = useState("beige");

  const addRow = () => {
    setRows(rows+1);
  }

  const addCol = () => {
    setCols(cols+1);
  }

  const selectColor = (colors) => {
    setColor(colors.target.value);
    console.log(color);
  }

  return (
    <div className="container">
      <h1>DOM III + ReactJS: GRID</h1>
      <div className="nav-bar">
      <button onClick={addRow} class="btn-rowAdd">+ Row</button>
      {/* <button onClick="delRow()" class="btn-rowDel">- Row</button> */}
      <button onClick={addCol} class="btn-colAdd">+ Column</button>
      {/* <button onClick="delCol()" class="btn-colDel">- Column</button> */}
      {/* <button onClick="fillAllUncoloredCells()" class="fillUncolored">Fill All Uncolored Cells</button>
      <button onClick="fillAllCells()" class="fillAll">Fill ALL Cells</button>
      <button onClick="clearCells()" class="clear">Clear ALL</button> */}
      <select onChange={selectColor} name="colors" id="colors">
          <option value="beige">Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </div>
      <Table rowNum={rows} colNum={cols} colorVal={color}/>
    </div>
  );
}

export default App;
