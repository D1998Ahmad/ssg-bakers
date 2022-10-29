import Slide from "./Slide";
import React, { useContext } from "react";
import { SliderContext } from "./Slider";

const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);
  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items?.map((item, index) => {
        return <Slide  key={index}  item={item}></Slide>;
      })}
    </div>
  );
};

export default SlidesList;
