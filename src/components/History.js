import React from "react";
const myImage = { url: "images/dilshad-ahmad.jpeg", title: "Loath Bread" };

const History = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="photo">
        <img
          src={myImage.url}
          alt={myImage.title}
          className={"profile-photo"}
        />
        <div className="text-center font-bold" style={{ fontFamily: "serif" }}>
          Dilshad Ahmad
        </div>
      </div>
      <div className="text flex  items-center" style={{ fontFamily: "serif" }}>
        Dilshad Ahmad is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default History;
