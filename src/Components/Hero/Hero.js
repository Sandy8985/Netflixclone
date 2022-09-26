import React from "react";
import './Hero.css';
import Navbar from "../Navbar/Navbar";
import {MdOutlineArrowForwardIos} from 'react-icons/md';

const Hero = () => {
  return (
    <section>
      <div className="bg">
      <Navbar />
      <div className="content">
        
      <h1>Unlimited movies, TV <span style={{display: 'block'}}></span> shows and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      
      
      <div className="inp">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="inp2">
      <input type="email" name="email" placeholder="Enter your Email" id="ip" style={{backgroundColor:"white", fontSize:"20px", paddingLeft:"10px"}}/>
      <input type="button" value="Get Started" className="sub" /><MdOutlineArrowForwardIos style={{color:'white', size:'20px'}} />
      </div>
      
      </div>
      </div>

    
      </div>  
    </section>
  );
};

export default Hero;
