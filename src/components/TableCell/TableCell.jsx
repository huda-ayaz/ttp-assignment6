import { useState } from "react";
import "./TableCell.css";

const TableCell = ({ colorVal }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [color, setColor] = useState("beige");

  const handleColorChange = () => {
    setIsSelected(true);
    style();
  }

  // Click on a single cell, changing its color to the currently selected color
  const style = () => {
    if (isSelected) {
      setColor(colorVal);
    } else {
      setColor("beige");
    }
  }

  return (
    <td style={{backgroundColor:color}} id="cell" onClick={handleColorChange}></td>
  );
}

export default TableCell;
