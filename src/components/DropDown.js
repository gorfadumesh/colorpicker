import React from 'react'
import {
  Select,
  MenuItem,
} from "@mui/material";
import colors from "./colorData"

const DropDown = ({ handleColorChange, value }) => {
  return (
    <div>
      {" "}
      <Select
        onChange={(e) => handleColorChange(e.target.value)}
        value={value}
        fullWidth>
        {colors.map((color, i) => (
          <MenuItem value={color.hex} key={i} style={{ color: color.hex }}>
            {color.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDown