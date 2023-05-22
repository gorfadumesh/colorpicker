import React, { useState } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import ColorBox from "./components/ColorBox";
import {
  Slider,
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import colors from "./components/colorData";

function App() {


  const hexToHsl = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }

      h /= 6;
    }

    return {
      h: (h * 360).toFixed(0),
      s: (s * 100).toFixed(0),
      l: (l * 100).toFixed(0),
    };
  };

  const [hsl, setHsl] = useState(hexToHsl("#FF0000"));
  const [selectedColor, setSelectedColor] = useState(colors[0].hex);
  const handleColorChange = (color) => {
    setHsl(hexToHsl(color));
    setSelectedColor(color);
  };

  const handleSliderChange = (e) => {
    setHsl({ ...hsl, [e.target.name]: Number(e.target.value) });
  };
  return (

    <Container maxWidth="sm">
      <Card sx={{ my: 4 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Color Picker
          </Typography>
          <Box sx={{ my: 2 }}>
            <DropDown
              handleColorChange={handleColorChange}
              value={selectedColor}
            />
          </Box>

          <ColorBox hsl={hsl} />
      

          <Typography id="hue-slider" gutterBottom>
            Hue
          </Typography>
          <Slider
            name="h"
            aria-labelledby="hue-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={360}
            value={hsl.h}
            onChange={handleSliderChange}
          />

          <Typography id="saturation-slider" gutterBottom>
            Saturation
          </Typography>
          <Slider
            name="s"
            aria-labelledby="saturation-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
            value={hsl.s}
            onChange={handleSliderChange}
          />

          <Typography id="lightness-slider" gutterBottom>
            Lightness
          </Typography>
          <Slider
            name="l"
            aria-labelledby="lightness-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
            value={hsl.l}
            onChange={handleSliderChange}
          />

          <Button
            variant="contained"
            sx={{ my: 2 }}
            onClick={() =>
              navigator.clipboard.writeText(
                `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
              )
            }>
            Copy HSL
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
