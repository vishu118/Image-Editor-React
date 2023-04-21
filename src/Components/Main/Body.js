import React from "react";

const Body = () => {
  const filterOptions = [
    { id: "brightness", name: "Brightness" },
    { id: "saturation", name: "Saturation" },
    { id: "inversion", name: "Inversion" },
    { id: "grayscale", name: "Grayscale" },
    { id: "contrast", name: "Contrast" },
    { id: "hueRotate", name: "HueRotate" },
  ];

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

        <div className="imagePreview"></div>
      </div>
    </div>
  );
};

export default Body;
