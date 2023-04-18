import React from 'react'
import {IoMdUndo,IoMdRedo} from "react-icons/io"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='images_option'>
        <div className="reset">
            <button className='size'>Reset</button>
            <button className='size'>Save Images</button>
        </div>
        <div className="choose">
            <button className='size'><IoMdUndo/></button>
            <button className='size'><IoMdRedo/></button>
            <button className='size'>Crop Image</button>
            <button className='size'>Save Image</button>
        </div>
    </div>
  )
}

export default Footer