import React from 'react'
import '../styles/_overview.scss'

function Overview() {

  return (
    <section className='overviewMainContainer'>
      <div className='overviewMainContainer-column content' data-speed="0.45">
        <div className='titleBox-name titlePosition'>Education</div>
        <div className='divider leftDivider' />
        <div className='content-school'>
          <ul>
            <li>04/2020 - 06/2020 Software Engineering Career Course Boca Code </li>
            <li>Associate in Arts Degree (Marketing) Palm Beach State College</li>
            <li>09/2014 – Present EMT, Certification Palm Beach State College</li>
            <li>03/2015 – 09/2015 Bachelor of Science, Information Technology</li>
            <li>09/2005 – 07/2008 Institute Polytechnic Informatics Raul Cepero Bonilla </li>
          </ul>
        </div>
      </div>
      <div className='verticalDivider' />
      <div className='overviewMainContainer-column skillsColumn' data-speed="0.45">
        <p className='titleBox-name titlePosition'>Most used Skills</p>
        <div className='divider rightDivider ' />
        <div className='skillsColumn-skillArea'>
          <div className='skillsColumn-skill skillsColumn-yellow'>React</div>
          <div className='skillsColumn-skill skillsColumn-blue'>React Native</div>
          <div className='skillsColumn-skill skillsColumn-orange'>Electron</div>
          <div className='skillsColumn-skill skillsColumn-purple'>TypeScript</div>
          <div className='skillsColumn-skill skillsColumn-yellow'>SQL / NoSQL</div>
          <div className='skillsColumn-skill skillsColumn-red'>HTML</div>
          <div className='skillsColumn-skill skillsColumn-blue'>CSS</div>
          <div className='skillsColumn-skill skillsColumn-yellow'>SASS</div>
          <div className='skillsColumn-skill skillsColumn-green'>Node</div>
          <div className='skillsColumn-skill skillsColumn-purple'>Express</div>
          <div className='skillsColumn-skill skillsColumn-green'>Styled Components</div>
          <div className='skillsColumn-skill skillsColumn-purple'>Firebase</div>
        </div>
      </div>
    </section>
  )
}

export default Overview
