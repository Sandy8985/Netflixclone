import React from "react";
import "./Section4.css";
import image4 from '../../Assets/sec5/device.png';
import video2 from '../../Assets/sec5/video2.mp4';

const Section4 = () => {
  return (
    <div className="sec4">
      <div className="sec4content">
        <h1>Watch everywhere.</h1>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="image">
      <img src={image4} alt="image4" />
      <video src={video2} autoPlay loop muted className='vid2'></video>
      </div>
    </div>
  );
};

export default Section4;
