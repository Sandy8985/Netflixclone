import React from "react";
import "./Navbar.css";
import img from "../../Assets/sec1/netflix.png";
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
        <img src={img} alt="Logo"/>
        <div id="google_translate_element"></div>

            <button className="btn">Sign in</button>
        </div>
    </nav>
  );
};

export default Navbar;
