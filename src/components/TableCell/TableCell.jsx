import { useState } from "react";
import "./TableCell.css";

const TableCell = ({ colorVal }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [color, setColor] = useState("beige");

  const handleColorChange = () => {
    setIsSelected(true);
    console.log(isSelected);
    console.log("selected");
    style();
  }

  const style = () => {
    if (isSelected) {
      console.log("made it change")
      setColor(colorVal);
    } else {
      console.log("made it beige")
      setColor("beige");
    }
  }

  return (
    <td style={{backgroundColor:color}} id="cell" onClick={handleColorChange}></td>
  );
}

export default TableCell;
