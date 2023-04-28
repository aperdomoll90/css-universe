import React from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom'
import AnimatedLink from './AnimatedLink'
import logo from '../../media/logo.svg'

function NavBar({ route }) {
  const location = useLocation()

  return (
    <div id='navigation-container'>
      <img src={logo} id='logo' alt='letter A encased in a hexagon' />
      <div className='button-container'>
        {location.pathname !== '/' && <AnimatedLink label='Home' direction='/' />}
        {location.pathname !== '/resume' && <AnimatedLink label='Resume' direction='/resume' />}
        <AnimatedLink label='Download' blank direction='https://firebasestorage.googleapis.com/v0/b/adrian-perdomo-portfolio.appspot.com/o/Adrian-Perdomo-Resume-09%3A2021.pdf?alt=media&token=54fb3de3-4c3b-453b-b28c-47db375b21b0' />
      </div>
    </div>
  )
}

export default NavBar
