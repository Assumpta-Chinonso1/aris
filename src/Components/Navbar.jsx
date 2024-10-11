import React from 'react'
import './Navbar.css'
import { assests } from '../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assests.logo} alt="logo" />

        <div className="socials">
            <img src={assests.ig} alt="ig" />
            <img src={assests.linkedin} alt="linkedin" />
            <img src={assests.twitter} alt="twitter" />

            <div className="resume">
                <button className='btn'>Download</button>
            </div>
        </div>
          <span className="title">
            <h1>Aris</h1> 

      <p>  Creative Personal CV / Resume / Virtual Business Card & Portfolio Template with workable contact formCreative Personal CV / Resume / Virtual Business Card & Portfolio Template with workable contact form </p>

      </span>
      </div>
  )
}

export default Navbar