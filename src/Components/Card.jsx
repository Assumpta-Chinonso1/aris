import React from 'react'
import './Card.css'
import { assests } from '../assets/assets'

const Card = ({title, subtitle}) => {
    
  return (
    <div className='card'>
        <img src={assests.project} alt={title} />
        
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

    </div>
  )
}

export default Card