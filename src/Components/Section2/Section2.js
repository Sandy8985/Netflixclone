import React, { useState } from "react";
import "../Section2/Section2.css";
// images
import img1 from "../../Assets/sec3/365daysi.png";
import img2 from "../../Assets/sec3/avengersi.jpg";
import img3 from "../../Assets/sec3/brahmastrai.png";
import img4 from "../../Assets/sec3/cruellai.png";
import img5 from "../../Assets/sec3/darlingsi.png";
import img6 from "../../Assets/sec3/fullmetali.png";
import img7 from "../../Assets/sec3/guiltyi.png";
import img8 from "../../Assets/sec3/shei.png";
import img9 from "../../Assets/sec3/winxsagai.png";

// videos
import pushpa from "../../Assets/sec3/365daysv.mp4";
import vikram from "../../Assets/sec3/avengersv.mp4";
import kgf from "../../Assets/sec3/brahmastrav.mp4";
import rrr from "../../Assets/sec3/cruellav.mp4";
import liger from "../../Assets/sec3/darlingsv.mp4";
import hotd from "../../Assets/sec3/fullmetalv.mp4";
import sita from "../../Assets/sec3/guiltyv.mp4";
import avengers from "../../Assets/sec3/shev.mp4";
import bahubali from "../../Assets/sec3/winxsagav.mp4";



const imagesm = [
  {
    Image: img1,
    trailer: pushpa,
  },
  {
    Image: img2,
    trailer: vikram,
  },
  {
    Image: img3,
    trailer: kgf,
  },
  {
    Image: img4,
    trailer: hotd,
  },
  {
    Image: img5,
    trailer: liger,
  },
  {
    Image: img6,
    trailer: rrr,
  },
  {
    Image: img7,
    trailer: sita,
  },
  {
    Image: img8,
    trailer: avengers,
  },
  {
    Image: img9,
    trailer: bahubali,
  },
];

const Section2 = () => {
  const [select, setselect] = useState(null);
  const handleselect = (i) => {
    if (select === i) {
      return setselect(null);
    }
    setselect(i);
  };
  return (
    <div>
      <div className="sec7">
        <div className="grid">
          {imagesm.map((item, i) => {
            return (
              <>
                <img
                  key={i}
                  src={item.Image}
                  alt=""
                  onClick={() => handleselect(i)}
                />
              </>
            );
          })}
        </div>

        <div className="display">
          <div className="video">
            {imagesm.map((promo, i) => {
              return (
                <div>
                  <video
                    className={select === i ? "trailers" : "trailers show"}
                    src={promo.trailer}
                    controls
                  ></video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;