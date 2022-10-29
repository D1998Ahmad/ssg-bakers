import React from "react";
import History from "./History";

const About = () => {
  return (
    <div
      className="px-5 pt-5 pb-5  bg-gradient-to-r from-yellow-800 via-yellow-200  to-yellow-700 "
      style={{ height: "fitContent" }}
    >
      <div className="flex justify-center mb-5 ">
        <h2 className="text-3xl font-black text-black opacity-80 ">
          About Us
        </h2>
      </div>
      <History />
    </div>
  );
};

export default About;
