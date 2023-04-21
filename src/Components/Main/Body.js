import React , {useState , useRef} from "react";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoIosImage } from "react-icons/io";
import Footer from "../Footer/Footer";
import "../Style/Main.css"



const filterOptions = [
    { id: "brightness", name: "Brightness" },
    { id: "saturation", name: "Saturation" },
    { id: "inversion", name: "Inversion" },
    { id: "grayscale", name: "Grayscale" },
    { id: "contrast", name: "Contrast" },
    { id: "hueRotate", name: "HueRotate" },
  ];

const Body = () => {

    const [previewImg, setPreviewImg] = useState(null);
    const [activeFilter, setActiveFilter] = useState("brightness");
    const [sliderValue, setSliderValue] = useState(100);
    const previewImgRef = useRef(null);

  return (
    <div className="container">
      <h2>Image Editor</h2>
      <div className="wrapper">
        <div className="editing_pannel">
          <div className="filters">
            <label className="title">Filters</label>

            <div className="filters_options">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  id={option.id}
                  className={activeFilter === option.id ? "active" : ""}
                //   onClick={() => handleFilterClick(option)}
                >
                  {option.name}
                </button>
              ))}
            </div>

            <div className="slider">
              <div className="filter-info">
                <p className="name">{activeFilter}</p>
                <p className="value">{`${sliderValue}%`}</p>
              </div>
              <input
                type="range"
                min="0"
                // max={
                //   activeFilter === "brightness" || activeFilter === "saturation"
                //     ? "200"
                //     : "100"
                // }
                // value={sliderValue}
                // onChange={handleSliderChange}
              />
            </div>
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

        <div className="imagePreview">
         {previewImg ? (
            <img
              src={URL.createObjectURL(previewImg)}
              alt="preview"
              ref={previewImgRef}
            //   onLoad={applyFilter}
            />
          ) : (
            <img src="image-placeholder.svg" alt="preview-img" htmlFor="choose"/>
          )}

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
