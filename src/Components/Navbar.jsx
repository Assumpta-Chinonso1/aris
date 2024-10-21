import React from 'react'
import './Navbar.css'
import { assests } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <img src={assests.logo} alt="logo" className='logo' />
        </div>
        <div className="navbar-right">
            <div className="social-icons">
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-google'></i>
                <i className='fab fa-instagram'></i>
            </div>
            <a href="about" className='download-btn'>
                Download
            </a>
        </div>

    </nav>
  )
}

export default Navbar