import React from "react";
import Contact from "./Contact";
import Feedback from "./Feedback";

const Footer = () => {
  return (
    <div>
      <div className="grid pt-5 grid-cols-1 md:grid-cols-2  mb-5">
        <Contact />
        <Feedback />
      </div>
      <div className="py-5 border-t  text-center bg-slate-800 text-rose-50">
        Copyright ©2022 | All rights reserved{" "}
      </div>
    </div>
  );
};

export default Footer;
