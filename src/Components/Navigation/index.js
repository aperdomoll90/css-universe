import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'


function CircularNav() {
    
    useEffect(() => {
        let toggle = document.querySelector('.toggle');
        let menu = document.querySelector('.menu');
        toggle.onclick = ()=>{ menu.classList.toggle('active')}
    }, [])

  return (   
 <div className="menuWrapper">
    <div className="menu">
           <div className="toggle"><ion-icon name="add-outline"></ion-icon></div>
           <li style={{'--i':0}}><Link to='/'><ion-icon name="home-outline"></ion-icon></Link></li>
           <li style={{'--i':1}}><Link to='/loaders'><ion-icon name="logo-electron"></ion-icon></Link></li>
           <li style={{'--i':2}}><Link to='/forms'><ion-icon name="bar-chart-outline"></ion-icon></Link></li>
           <li style={{'--i':3}}><Link to='/navs'><ion-icon name="map-outline"></ion-icon></Link></li>
           <li style={{'--i':4}}><Link to='/effects'><ion-icon name="code-working-outline"></ion-icon></Link></li>
           <li style={{'--i':5}}><Link to='/creatures'><ion-icon name="paw-outline"></ion-icon></Link></li>
           <li style={{'--i':6}}><Link to='/parallax'><ion-icon name="settings-outline"></ion-icon></Link></li>
           <li style={{'--i':7}}><Link to='/3d'><ion-icon name="planet-outline"></ion-icon></Link></li>
     </div>

</div>
  )
}

export default CircularNav
