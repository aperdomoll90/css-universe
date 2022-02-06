import './styles.css'
import HikerParallax from '../../Routes/FeaturedParallaxPage/ParallaxCollection/HikerParallax/index'
// import videoFeature from './images/forestColors.mp4'
// const videoFeature = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/waves.mp4?alt=media&token=95ec6278-3199-40b3-a1d2-6ae3187ad84f'

function Hero() {
  return (
    <div className='heroArea'>
      <div className='NavContainer'>
        <div className='mainLogo'>
          <span>css</span>forge
        </div>
      </div>
      {/* <div className='heroTitleBox' data-speed='0.1'>
        <div class='forestCube'>
          <video loop autoPlay muted className='videoFeature' src={videoFeature} />
        </div>
      </div> */}
      <HikerParallax/>
    </div>
  )
}

export default Hero
