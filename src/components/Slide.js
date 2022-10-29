import React from "react";
import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";

const Slide = ({ item:{url,title} }) => {
  return (
    <div className="slide">
      <div className="slide-image">
        <SlideImage src={url} alt={title}/>
      </div>
      <div className="slide-title">
        <SlideTitle title={title}/>
      </div>
    </div>
  );
};

export default Slide;
