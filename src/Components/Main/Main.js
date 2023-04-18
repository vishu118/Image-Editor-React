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
    <div className="image-editor">
      <div className="card">
        <div className="card_header">
          <h2>Image Editor</h2>
        </div>
        <div className="card-body">
          <div className="sidebar">
            <div className="side_body">
              <div className="filer_section">
                <span>Filters</span>
                <div className="filter_features">
                  {Filters.map((ele, idx) => {
                    return (
                      <button key={idx} className="features">
                        {ele.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="filter_slider">
                <div className="sliders">
                  <span>Rotate</span>
                  <span>100%</span>
                </div>
                <input type="range" />
              </div>
              <div className="rotate">
                   <div className="extra_features">
                    <span>Rotate & Flip</span>
                   </div>
                 <div className="btn">
                 <button>he</button>
                  <button>he</button>
                  <button>he</button>
                  <button>he</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
