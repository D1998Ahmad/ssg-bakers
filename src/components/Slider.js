import React, { createContext, useEffect, useState } from "react";

import SlidesList from "./SlidesList";
import Arrows from "./controls/Arrows";
import Dots from "./controls/Dots";
export const SliderContext = createContext();

const Slider = ({ width, height, autoPlay, autoPlayTime }) => {
  const [items] = useState([
    { url: "images/sliding/image1.jpg", title: "Loath Bread" },
    { url: "images/sliding/image2.jpg", title: "Sheermall" },
    { url: "images/sliding/image3.jpg", title: "Baking" },
    { url: "images/sliding/image2.jpg", title: "Sheermall" },
    { url: "images/sliding/image3.jpg", title: "Baking" },
    { url: "images/sliding/image2.jpg", title: "Sheermall" },
    { url: "images/sliding/image3.jpg", title: "Baking" },
    { url: "images/sliding/image2.jpg", title: "Sheermall" },
    { url: "images/sliding/image3.jpg", title: "Baking" },
    // { url: "images/gudiya/gudiya-1.jpeg", title: "Gudiya" },
    // { url: "images/gudiya/gudiya-2.jpeg", title: "Gudiya" },
    // { url: "images/gudiya/gudiya-3.jpeg", title: "Gudiya" },
    // { url: "images/gudiya/gudiya-4.jpeg", title: "Gudiya" },
    // { url: "images/gudiya/gudiya-5.jpeg", title: "Gudiya" },
  ]);
  const [slide, setSlide] = useState(0);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setSlide((slide + 1) % items.length);
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayTime, slide, items]);

  return (
    <div style={{ width, height }} className="slider">
      <SliderContext.Provider
        value={{
          changeSlide,
          goToSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList></SlidesList>
        <Arrows></Arrows>
        <Dots></Dots>
      </SliderContext.Provider>
    </div>
  );
};

export default Slider;
