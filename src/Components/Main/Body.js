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
                  onClick={() => handleFilterClick(option)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="imagePreview"></div>
      </div>
    </div>
  );
};

export default Body;
