import React, { useContext } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { SliderContext } from "../Slider";
import { IconButton } from "@mui/material";

const Dots = () => {
  const { goToSlide, items, slideNumber } = useContext(SliderContext);
  return (
    <div className="flex justify-center z-[2] relative">
      {items.map((item, index) => {
        let styles = {};
        if (index === slideNumber) {
          styles = {
            fontSize: "medium",
            background: "white",
            color: "black",
            border: "2px solid black",
          };
        } else {
          styles = {
            fontSize: "medium",
            background: "white",
            color: "white",
            border: "2px solid black",
          };
        }
        return (
          <IconButton
            aria-label="delete"
            onClick={(e) => goToSlide(index)}
            color="primary"
            key={index}
          >
            <CircleIcon className="transition-transform" style={styles} />
          </IconButton>
        );
      })}
    </div>
  );
};

export default Dots;
