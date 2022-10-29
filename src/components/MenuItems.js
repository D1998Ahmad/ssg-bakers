import React, { useState } from "react";

const MenuItems = () => {
  const [items] = useState([
    {
      url: "images/sliding/image1.jpg",
      title: "Loath Bread",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image2.jpg",
      title: "Sheermall",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image3.jpg",
      title: "Baking",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image1.jpg",
      title: "Loath Bread",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image2.jpg",
      title: "Sheermall",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image3.jpg",
      title: "Baking",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image1.jpg",
      title: "Loath Bread",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image2.jpg",
      title: "Sheermall",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
    {
      url: "images/sliding/image3.jpg",
      title: "Baking",
      price: "₹45.00",
      desc: "Best before 10 days",
    },
  ]);

  return (
    <div className="px-5 pt-5 pb-10 bg-[#f7f5efe8]">
      <div className="flex justify-center mb-5 ">
        <h2 className="text-3xl font-black	">Products</h2>
      </div>
      {/* Menu items  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-2 border  bg-white rounded  gap-5"
            >
              <div className="flex justify-center">
                <div
                  className="prod-img w-full bg-hero bg-no-repeat bg-cover bg-right bg-scroll"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    height: "150px",
                  }}
                ></div>
              </div>
              <div className="flex flex-col justify-around">
                <div
                  className="title text-2xl"
                  style={{ fontFamily: "cursive" }}
                >
                  {item.title}
                </div>
                <div className="price text-sm">{item.desc}</div>
                {item.price ? (
                  <div className="flex flex-col">
                    <div className="price text-sm font-bold	text-[#b45309]">
                      {item.price}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
