import React from "react";
import "./Main.css";

const Main = () => {
  const Filters = [
    {
      name: "Brightness",
    },
    {
      name: "Greyscale",
    },
    {
      name: "Sepia",
    },
    {
      name: "Saturate",
    },
    {
      name: "Contrast",
    },
    {
      name: "HueRotate",
    },
  ];
  return (
    <div className="mainContainer">
      <div className="wrapper">
        <h2>Image Editor</h2>
        <div className="editor-body">
          <div className="feature-container"></div>
          <div className="image-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
