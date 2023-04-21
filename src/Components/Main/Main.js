import React, { useState, useRef } from "react";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoIosImage } from "react-icons/io";
import Footer from "../Footer/Footer";
import "../Style/Main.css";

const Main = () => {
  const filterOptions = [
    { id: "brightness", name: "Brightness" },
    { id: "saturation", name: "Saturation" },
    { id: "inversion", name: "Inversion" },
    { id: "grayscale", name: "Grayscale" },
    { id: "contrast", name: "Contrast" },
    { id: "hueRotate", name: "HueRotate" },
  ];

  const [PreviewImg, setPreviewImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Brightness");
  const [sliderValue, setSliderValue] = useState(100);
  const [brightness, setBrightness] = useState("100");
  const [saturation, setSaturation] = useState("100");
  const [inversion, setInversion] = useState("0");
  const [grayscale, setGrayscale] = useState("0");
  const PreviewImgRef = useRef(null);

  const loadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreviewImg(file);
  };

  const applyFilter = () => {
    PreviewImgRef.current.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    // previewImgRef.current.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  };

  const handleFilterClick = (option) => {
    setActiveFilter(option.name);

    switch (option.id) {
      case "brightness":
        setSliderValue(brightness);
        break;
      case "saturation":
        setSliderValue(saturation);
        break;
      case "inversion":
        setSliderValue(inversion);
        break;
      default:
        setSliderValue(grayscale);
    }
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    switch (activeFilter) {
      case "brightness":
        setBrightness(event.target.value);
        break;
      case "saturation":
        setSaturation(event.target.value);
        break;
      case "inversion":
        setInversion(event.target.value);
        break;
      default:
        setGrayscale(event.target.value);
    }
  };

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
                    {filterOptions.map((ele, idx) => {
                      return (
                        <button
                          key={ele.id}
                          id={ele.id}
                          className={activeFilter === ele.id ? "active" : ""}
                          onClick={() => handleFilterClick(ele)}
                        >
                          {ele.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="filter_slider">
                  <div className="sliders">
                    <p className="name">{activeFilter}</p>
                    <p className="value">{`${sliderValue}%`}</p>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={
                      activeFilter === "Brightness" ||
                      activeFilter === "saturation"
                        ? "200"
                        : "100"
                    }
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>
                <div className="rotate">
                  <div className="extra_features">
                    <span>Rotate & Flip</span>
                  </div>
                  <div className="btn">
                    <button>
                      <GrRotateLeft />
                    </button>
                    <button>
                      <GrRotateRight />
                    </button>
                    <button>
                      <CgMergeVertical />
                    </button>
                    <button>
                      <CgMergeHorizontal />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image_Section">
            <div className="image">
              {PreviewImg ? (
                <img src={URL.createObjectURL(PreviewImg)} alt="preview" />
              ) : (
                <label htmlFor="choose">
                  <IoIosImage />
                  <span>Choose Image</span>
                </label>
              )}
            </div>
          </div>
        </div>
        <Footer loadImage={loadImage} />
      </div>
    </div>
  );
};

export default Main;
