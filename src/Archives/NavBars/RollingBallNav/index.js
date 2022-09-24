import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'


function RollingBallNav() {
useEffect(()=>{
    const list =document.querySelectorAll('.rollingBallNavList')
    function activeLink(){
        list.forEach((item)=> item.classList.remove('rollingBallNavActive'))
        this.classList.add('rollingBallNavActive')
    }
    list.forEach((item)=>{
        item.addEventListener('click',activeLink)
    })
},[])

  return (   
 <div className="rollingBallNavWrapper">
   <div className="rollingBallNav">
<ul>
    <li className='rollingBallNavList rollingBallNavActive'>
        <Link to="#">
            <span className="rollingBallNavIcon"><ion-icon name="home-outline"/></span>
            <span className="rollingBallNavText">Home</span>
        </Link>
    </li>
    <li className='rollingBallNavList'>
        <Link to="#">
            <span className="rollingBallNavIcon"><ion-icon name="person-outline"/></span>
            <span className="rollingBallNavText">Profile</span>
        </Link>
    </li>
    <li className='rollingBallNavList'>
        <Link to="#">
            <span className="rollingBallNavIcon"><ion-icon name="chatbubble-outline"/></span>
            <span className="rollingBallNavText">Messages</span>
        </Link>
    </li>
    <li className='rollingBallNavList'>
        <Link to="#">
            <span className="rollingBallNavIcon"><ion-icon name="camera-outline"/></span>
            <span className="rollingBallNavText">Photos</span>
        </Link>
    </li>
    <li className='rollingBallNavList'>
        <Link to="#">
            <span className="rollingBallNavIcon"><ion-icon name="settings-outline"/></span>
            <span className="rollingBallNavText">Settings</span>
        </Link>
    </li>
    <div className="rollingBallNavIndicator"> </div>
</ul>
   </div>
</div>
  )
}

export default RollingBallNav
