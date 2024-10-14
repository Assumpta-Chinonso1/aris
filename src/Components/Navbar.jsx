import React from 'react';
import './Navbar.css';
import logo from '../assets/logoaris.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <a href="#" className="download-btn">
          Download Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
