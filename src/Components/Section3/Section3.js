import React from "react";
import image from "../../Assets/sec4/image.jpg";
import "./Section3.css";
import image1 from "../../Assets/sec4/boxshot.png";
const Section3 = () => {
  return (
    <div className="sec3">
      <div className="imagesec">
        <img src={image} alt="image2" />

        <div className="sec3sec1">
          <img src={image1} alt="image1" />
          <div className="sec3sec1cont">
            <h3>Stranger Things</h3>
            <p>Downloading...</p>
          </div>
        </div>
      </div>

      <div className="sec3_content">
        <h1>
          Download your shows<span style={{ display: "block" }}></span> to watch
          offline.
        </h1>
        <p>
          Save your favourites easily and always have
          <span style={{ display: "block" }}></span> something to watch.
        </p>
      </div>
    </div>
  );
};

export default Section3;
