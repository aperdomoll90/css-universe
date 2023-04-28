import React from 'react'
import { Link } from 'react-router-dom'
import './animatedLink.css'

function AnimatedLink({ label, direction, blank }) {
  return !blank ? (
    <Link to={direction}>
      <div className='linksBullet'>
        <h2>
          {label}
          <span> {label}</span>
          <span> {label}</span>
        </h2>
      </div>
    </Link>
  ) : (
    <a href={direction} rel='noreferrer' target='_Blank'>
      <div className='linksBullet'>
        <h2>
          {label}
          <span> {label}</span>
          <span> {label}</span>
        </h2>
      </div>
    </a>
  )
}

export default AnimatedLink
