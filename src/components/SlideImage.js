import React from "react";

const SlideImage = ({ src, alt, isItem }) => {
  return <img src={src} alt={alt} className={isItem ? "" : "slide-image"} />;
};

export default SlideImage;
