import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { SliderContext } from "../Slider";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);
  return (
    <div className="arrows ">
      <IconButton
        aria-label="delete"
        className="border text-4xl"
        onClick={(e) => changeSlide(-1)}
        color="primary"
      >
        <NavigateBefore style={{fontSize:"xxx-large"}} />
      </IconButton>
      <IconButton
        className="border text-4xl"
        aria-label="delete"
        onClick={(e) => changeSlide(1)}
        color="primary"
      >
        <NavigateNext style={{fontSize:"xxx-large"}}   />
      </IconButton>
    </div>
  );
};

export default Arrows;
