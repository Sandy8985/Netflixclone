import React from 'react'
import "./Section1.css";
import image from "../../Assets/sec2/tv.png"
import video from "../../Assets/sec2/video1.mp4";
const Section1 = () => {
  return (
    <div className='sec1'>
      <div className="sec1_content">
      <h1>Enjoy on your TV.</h1>
      <p>Watch on smart TVs, PlayStation, Xbox, <span style={{display:'block'}}></span> Chromecast, Apple TV, Blu-ray players and<span style={{display:'block'}}></span> more.</p>
      </div>
      <img src={image} alt="TV" style={{width:"35%", zIndex:"999"}} className="Sec1_img"/>
      <video src={video} autoPlay loop muted className='vid1'></video>
    </div>
  )
}

export default Section1