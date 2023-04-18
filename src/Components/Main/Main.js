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

  let image = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
  return (
    <div className="mainContainer">
      <div className="wrapper">
        <h2>Image Editor</h2>
        <div className="editor-body">
          <div className="feature-container">
            <span>Filter</span>
            <div className="fiter_key">
              {
                Filters.map((ele,ind)=>{
                return <button>{ele.name}</button>
                })
              }
            </div>
          </div>
          <div className="image-container">
            <img src={image}  alt="images" style={{width : "60%"}} />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Main;
