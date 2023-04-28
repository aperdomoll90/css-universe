import React from 'react'
import './styles.css'

function HobbyPin({ label, image, inAlt }) {
  return (
    <div className='imageOverlay'>
      <img className='imageOverlay-img' alt={inAlt} src={image} />
      <div className='imageOverlay-overlay'>
        <div className='imageOverlay-title'>{label} </div>
      </div>
    </div>
  )
}

export default HobbyPin
