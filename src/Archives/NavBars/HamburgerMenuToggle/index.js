import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function HamburgerMenuToggle() {
  const [showMenu, setShowMenu] = useState()
  const toggleMenu = () => setShowMenu(value => !value)
  useEffect(() => {
    let menuToggle = document.querySelector('.HamburgerMenuToggle')
    let menuDropDown = document.querySelector('.HamburgerMenuToggleDropDown')
    menuToggle.onclick = function () {
      menuToggle.classList.toggle('HamburgerMenuToggleActive')
      menuDropDown.classList.toggle('HamburgerMenuToggleDropDownActive')
    }
  }, [])

  return (
    <div className='fieldLocation'>
      <div className='hamburgerMenuToggleWrapper'>
        <div className='HamburgerMenuToggle'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='HamburgerMenuToggleDropDown'>
          <p><ion-icon name="home-outline"/> Home</p>
          <p><ion-icon name="chatbubble-outline"/> Messages</p>
          <p><ion-icon name="person-outline"/> Profile</p>
          <p><ion-icon name="settings-outline"/> Settings</p>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenuToggle
