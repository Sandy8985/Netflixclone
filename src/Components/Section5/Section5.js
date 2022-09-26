import React from "react";
import image2 from "../../Assets/sec6/children.png";
import './Section5.css';

const Section5 = () => {
  return (
    <div className="sec5">
      <div className="sec5image">
        <img src={image2} alt="children" className="image51" />
      </div>

      <div className="sec5content">
        <h1>Create profiles for children.</h1>
        <p>
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default Section5;
