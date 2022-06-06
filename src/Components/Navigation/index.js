import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function CircularNav() {
  useEffect(() => {
    let toggle = document.querySelector('.toggle')
    let menu = document.querySelector('.menu')
    toggle.onclick = () => {
      menu.classList.toggle('active')
    }
  }, [])

  return (
    <div className='NavContainer'>
      <div className='menuWrapper'>
        <div className='menu'>
          <div className='toggle'>
            <ion-icon name='add-outline' />
          </div>
          <li style={{ '--i': 0 }}>
            <Link to='/'>
              <ion-icon name='home-outline' />
            </Link>
          </li>
          <li style={{ '--i': 1 }}>
            <Link to='/loaders'>
              <ion-icon name='logo-electron' />
            </Link>
          </li>
          <li style={{ '--i': 2 }}>
            <Link to='/forms'>
              <ion-icon name='bar-chart-outline' />
            </Link>
          </li>
          <li style={{ '--i': 3 }}>
            <Link to='/navs'>
              <ion-icon name='map-outline' />
            </Link>
          </li>
          <li style={{ '--i': 4 }}>
            <Link to='/effects'>
              <ion-icon name='code-working-outline' />
            </Link>
          </li>
          <li style={{ '--i': 5 }}>
            <Link to='/creatures'>
              <ion-icon name='paw-outline' />
            </Link>
          </li>
          <li style={{ '--i': 6 }}>
            <Link to='/parallax'>
              <ion-icon name='settings-outline' />
            </Link>
          </li>
          <li style={{ '--i': 7 }}>
            <Link to='/3d'>
              <ion-icon name='planet-outline' />
            </Link>
          </li>
        </div>
      </div>
      <div className='mainLogo'>
        <span>css</span>forge
      </div>
    </div>
  )
}

export default CircularNav
