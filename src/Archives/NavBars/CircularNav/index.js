import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'


function CircularNav() {
    
    useEffect(() => {
        let toggle = document.querySelector('.circularNavToggle');
        let menu = document.querySelector('.circularNavMenu');
        toggle.onclick = ()=>{ menu.classList.toggle('circularNavActive')}
    }, [])

  return (   
 <div className="circularNavWrapper">
    <div className="circularNavMenu">
           <div className="circularNavToggle"><ion-icon name="add-outline"/></div>
           <li style={{'--i':0}}><Link to='#'><ion-icon name="home-outline"/></Link></li>
           <li style={{'--i':1}}><Link to='#'><ion-icon name="person-outline"/></Link></li>
           <li style={{'--i':2}}><Link to='#'><ion-icon name="settings-outline"/></Link></li>
           <li style={{'--i':3}}><Link to='#'><ion-icon name="mail-outline"/></Link></li>
           <li style={{'--i':4}}><Link to='#'><ion-icon name="key-outline"/></Link></li>
           <li style={{'--i':5}}><Link to='#'><ion-icon name="videocam-outline"/></Link></li>
           <li style={{'--i':6}}><Link to='#'><ion-icon name="water-outline"/></Link></li>
           <li style={{'--i':7}}><Link to='#'><ion-icon name="paw-outline"/></Link></li>
                
     </div>
</div>
  )
}

export default CircularNav
