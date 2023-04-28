import React from 'react'
import './left.css'
import { experience } from './data'
function Left() {
  return (
    <div className='resume-column left'>
      <div className='left-container'>
        <h4>ABOUT ME</h4>
        <p>Certified EMT, fluent in English and Spanish, has worked in medical data and medical finance as well as IT at a medical school. I love art, cooking, baking, medical applications of technology, nanotechnology, automation, AI, and I hope to improve lives through my work.</p>
      </div>
        <h4 id='experience-title'>EXPERIENCE</h4>
      <div className='experience-container '>
        {experience &&
          experience.map(job => (
            <div className='experience-card'>
              <p className='position'>{job.position} </p>
              <p className='company'>
                {job.company} • {job.location} • {job.from} – {job.to}
              </p>
              <p>{job.description}</p>
            </div>
          ))}
      </div>
      <div id='experience-scroll'>^^ Scroll Me ^^</div>
    </div>
  )
}

export default Left
