import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import Navigation from "./controls/Navigation";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuButtons = ["Home", "About", "Products", "Testimony", "Contact"];

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("clicked")
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className="shadow-lg shadow-[#5858c9e8] bg-[#0b0b45e8]"
      style={{
        marginBottom: "20px",
      }}
    >
      <div className="md:container md:mx-auto">
        <div className="flex items-center justify-around">
          <div className="w-32 md:w-52 flex align-middle items-center lg:flex-row flex-col justify-between">
            <img
              src="images/Capture.JPG"
              alt="SSG-Bakers Logo"
              className="hover:cursor-pointer w-12 md:w-20"
            />
            <div
              className="font-medium text-sm text-white"
              style={{ fontFamily: "emoji" }}
            >
              SSG BAKERS
            </div>
          </div>
          <div className="hidden md:block md:basis-3/4 ">
            <ul className="flex flex-row justify-center font-serif text-slate-500 ">
              {menuButtons.map((btn) => {
                return (
                  <li
                    key={btn}
                    className="leading-8 	 rounded-[50px] px-10 font-medium		 text-white hover:text-slate-700 hover:cursor-pointer hover:bg-slate-100 transition-all duration-300"
                  >
                    <a href={`#${btn}`} alt={btn}>
                      {btn}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:hidden">
            <IconButton
              aria-label="delete"
              className="text-white"
              onClick={toggleDrawer("right", true)}
            >
              <Menu
                sx={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "xxx-large",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        menuButtons={menuButtons}
        toggleDrawer={toggleDrawer}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
