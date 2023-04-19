import React from 'react'
import '../Style/Footer.css'
import { IoIosImage,IoMdUndo,IoMdRedo } from "react-icons/io";

const Footer = () => {
  return (
    <div className='images_option'>
        <div className="reset">
            <button className='size'>Reset</button>
            <button className='size'>Save Images</button>
        </div>
        <div className="choose">
            <button className='size undo'><IoMdUndo/></button>
            <button className='size redo'><IoMdRedo/></button>
            <button className='size crop'>Crop Image</button>
            <label htmlFor='choose'>Choose Image</label> 
            <input type='file' id='choose'/>
        </div>
    </div>
  )
}

export default Footer