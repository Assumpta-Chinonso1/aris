// src/components/Navbar.js
import React from "react";
import "./Navbar.css"; 
import { assests } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
         <img src={assests.logo} alt="" className="navbar-logo"/>
          
        </div>   
      <div className="navbar-socials">
                 <img src={assests.ig} alt="ig" />
                 <img src={assests.linkedin} alt="linkrdin" />
                 <img src={assests.twitter} alt="twitter" />
      </div>

      <div className="navbar-download">
        <a href="#download" className="download-btn">Download</a>
      </div>

      <div className="navbar-title">
        <h1>Aris</h1>
        <p>Creative Personal CV / Resume / Virtual Business Card & Portfolio 
            Template with workable contact form</p>
      </div>
    </nav>
  );
};

export default Navbar;

