import { useState } from "react";
import "./TableCell.css";

const TableCell = ({ colorVal }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [color, setColor] = useState("beige");

  // Click on a single cell, changing its color to the currently selected color
  const handleColorChange = () => {
    setColor(colorVal);
  }

  return (
    <td style={{backgroundColor:color}} id="cell" onClick={handleColorChange}></td>
  );
}

export default TableCell;
