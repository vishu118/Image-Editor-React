import React, { useState } from "react";
import { GrRotateLeft,GrRotateRight } from 'react-icons/gr';
import { CgMergeVertical,CgMergeHorizontal } from 'react-icons/cg';
import { IoIosImage } from "react-icons/io";
import Footer from "../Footer/Footer";
import "../Style/Main.css";


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

  const [Image ,setImage ] = useState({
    image : ""
  })

  const handleImage = (e)=>{
    const { files } = e.target;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
   console.log(Image)
  }
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
              <div className="image">
          
                <label htmlFor="choose">
                <IoIosImage/>
                <span>Choose Image</span>
                </label>
              </div>
        </div>
      </div>
      <Footer handleImage = {handleImage}  />
      </div>
    </div>
  );
};

export default Main;
