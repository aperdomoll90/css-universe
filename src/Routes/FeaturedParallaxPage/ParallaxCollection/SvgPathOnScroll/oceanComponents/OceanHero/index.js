import './styles.css'

import videoFeature from '../../oceanMedia/waves.mp4'



function OceanHero() {
  return (
    <section id='oceanHero'>
      <div className='seaLogo'>
        <div>css</div>
        forge
      </div>
      <div class='sPathSvg'>
        <video loop autoPlay muted className='videoFeature'  src={videoFeature} />
      </div>
      <h3 className='whiteIndicator'>SCROLL</h3>
    </section>
  )
}

export default OceanHero
