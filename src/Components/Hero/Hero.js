import './styles.css'
import hiker from './images/hiker.png'
import plane2 from './images/plane2.png'
import plane3 from './images/plane3.png'
import plane4 from './images/plane4.png'
import sky from './images/sky.png'

// To add components to the Parallax add .translate and specify a data-speed
// By altering the "data-speed" values we alter the speed movement
// By adding negative value the component will go up

function Hero() {

  return (
    <div className='heroArea'>
     <div className='NavContainer'>
      <div className='logoContainer'>
        <p className='logo'>
          css<span>forge </span>
        </p>
      </div>
    </div>
      <div className='heroTitleBox translate' data-speed='0.1'>
        <p className='heroTitle'>CSS forge</p>
      </div>
      <img src={hiker} className='hiker translate' data-speed='0.3' alt='hiker' />
      <img src={plane2} className='plane2 translate' data-speed='-0.9' alt='mountain forest' />
      <img src={plane3} className='plane3 translate' data-speed='0.2' alt='medium mountain' />
      <img src={plane4} className='plane4 translate' data-speed='-0.5' alt='High mountain peeks covered in snow' />
      <img src={sky} className='sky translate' data-speed='0.5' alt='sky' />
    </div>
  )
}

export default Hero
