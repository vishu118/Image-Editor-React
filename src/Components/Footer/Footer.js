import React from 'react'
import '../Style/Footer.css'
import { IoMdUndo,IoMdRedo } from "react-icons/io";

const Footer = ({loadImage}) => {
  return (
    <div className='images_option'>
        <button className="reset-filter" 
        // onClick={resetFilter}
        >
          Reset Filters
        </button>
        <div className="row">
          <input
            type="file"
            className="file-input"
            accept="image/*"
            hidden
            // ref={fileInputRef}
            // onChange={loadImage}
          />
          <button
            className="choose-img"
            // onClick={() => fileInputRef.current.click()}
          >
            Choose Image
          </button>
          <button 
          // onClick={saveImage} 
          className="save-img" id='choose'>
            Save Image
          </button>
        </div>
    </div>
  )
}

export default Footer