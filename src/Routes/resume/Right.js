import React from 'react'
import './right.css'
import mail from '../../media/mail.png'
import phone from '../../media/phone.png'
import linkedin from '../../media/linkedin.png'
import github from '../../media/github.png'
import cooking from '../../media/cooking.png'
import gym from '../../media/gym.png'
import gardening from '../../media/gardening.png'
import karaoke from '../../media/karaoke.png'
import baking from '../../media/baking.png'
import painting from '../../media/painting.png'
import traveling from '../../media/traveling.png'
import HobbyPin from '../../Components/hobbyPin'

function Right() {
  return (
    <div className='resume-column right'>
      <div className='experience'>
        <h4>EDUCATION</h4>
        <div>
          <p className='position'>Software Engineering Career Course</p>
          <p className='company'>Boca Code</p>
          <p>04/2020 - 06/2020</p>
        </div>
        <br />
        <div>
          <p className='position'>Associate in Arts Degree (Marketing) </p>
          <p className='company'>Palm Beach State College</p>
          <p>09/2014 – Present</p>
        </div>
        <br />
        <div>
          <p className='position'>EMT, Certification </p>
          <p className='company'>Palm Beach State College</p>
          <p>03/2015 – 09/2015</p>
        </div>
        <br />
        <div>
          <p className='position'>Bachelor of Science, Information Technology </p>
          <p className='company'>Institute Polytechnic Informatics Raul Cepero Bonilla </p>
          <p>09/2005 – 07/2008</p>
        </div>
        <br />
      </div>
      <div>
        <h4>SKILLS</h4>
        <div className='resumeSkills'>
          <p className='position'>React</p>
          <p className='position'>JavaScrip</p>
          <p className='position'>HTML</p>
          <p className='position'>CSS</p>
          <p className='position'>SASS</p>
          <p className='position'>SQL</p>
          <p className='position'>NoSQL</p>
          <p className='position'>Node</p>
          <p className='position'>Express</p>
          <p className='position'>Typescript</p>
          <p className='position'>React Native</p>
          <p className='position'>Electron</p>
        </div>
      </div>
      <br />
      <div>
        <h4>CONTACT INFO</h4>
        <ul className='contactMe'>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={phone} alt='phone icon' />
            (305) 343-9033
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={mail} alt='mail icon' />
            adrianperdomollerena@gmail.com
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={github} alt='linkedin icon' />
            <a href='https://github.com/aperdomoll90' rel="noreferrer" target='_Blank'>
              https://github.com/aperdomoll90
            </a>
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={linkedin} alt='linkedin icon' />
            <a href='https://www.linkedin.com/in/adrian-perdomo-12997474/' rel="noreferrer" target='_Blank'>
              https://www.linkedin.com/in/adrian-perdomo-12997474/
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h4>HOBBIES</h4>
        <div className='hobbyArea'>
          <HobbyPin label='GYM' image={gym} inAlt='Icon of a dumbbell' />
          <HobbyPin label='Cooking' image={cooking} inAlt='Icon of cooking tools' />
          <HobbyPin label='Gardening' image={gardening} inAlt='icon of gardening tools' />
          <HobbyPin label='Karaoke' image={karaoke} inAlt='icon of karaoke microphone' />
          <HobbyPin label='Baking' image={baking} inAlt='icon of baking tools' />
          <HobbyPin label='Painting' image={painting} inAlt='icon of a painting brush' />
          <HobbyPin label='Traveling' image={traveling} inAlt='Icon of a plane flying' />
        </div>
      </div>
    </div>
  )
}
export default Right
