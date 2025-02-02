import React from 'react'
import './Card.css'
import { assests } from '../assets/assets'
import { Link } from 'react-router-dom'

const Card = ({title, subtitle, images, link}) => {

  return (
    <div className='card'>
          <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={images} alt={title} className="card-image" />
      </a>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

    </div>
  )
}

export default Card