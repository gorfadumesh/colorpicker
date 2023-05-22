import React from 'react'
import {Box} from "@mui/material";


const ColorBox = ({hsl}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        my: 2,
      }}
    />
  );
}

export default ColorBox;