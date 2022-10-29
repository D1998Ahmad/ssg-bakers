import React from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import Slider from "./components/Slider";
import Testimony from "./components/Testimony";
const App = () => {
  return (
    <div>
      <Header />
      <Slider autoPlay={true} autoPlayTime={3000} />
      <MenuItems />

      <Testimony />
      <About />
      <Footer />
    </div>
  );
};

export default App;
