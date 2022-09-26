import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foo">
      <div className="call">
        <p>Questions? Call 000-800-040-1843</p>
      </div>
      <div className="links">
        <div className="r1">
          <p>FAQ</p>
          <p>Investors Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="r2">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="r3">
          <p>Account</p>
          <p>Ways to watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div className="r4">
          <p>Media Centre</p>
          <hp4>Terms of Use</hp4>
          <p>Contact Us</p>
          <p style={{color:"black"}}>.</p>
        </div>
      </div>
      
      <div className="india">
        <p>Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;