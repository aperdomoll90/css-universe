import React from 'react'
import './styles.css'
import Left from './Left'
import Right from './Right'

import resumeProfile from '../../media/resumeProfile.png'
import page from '../../media/page.svg'
import DownloadButton from '../../Components/DownloadButton'

function Resume() {
  return (
    <div id='resume-grid-container'>
      <div className='header'>
        <div className='profileField'>
            <img alt='Adrian Perdomo Profile' src={resumeProfile} />
          <p>ADRIAN PERDOMO</p>
        </div>
        <h3>FULL STACK SOFTWARE DEVELOPER</h3>
        <DownloadButton/>
      </div>

      <Left />
      <div id="divider"></div>
      <Right />
    </div>
  )
}

export default Resume
