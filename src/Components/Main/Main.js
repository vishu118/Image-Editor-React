import React from "react";
import { GrRotateLeft,GrRotateRight } from 'react-icons/gr';
import { CgMergeVertical,CgMergeHorizontal } from 'react-icons/cg';
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
      <div className="section">
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
                 <button><GrRotateLeft/></button>
                  <button><GrRotateRight/></button>
                  <button><CgMergeVertical/></button>
                  <button><CgMergeHorizontal/></button>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image_Section">
          <img src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"  alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
