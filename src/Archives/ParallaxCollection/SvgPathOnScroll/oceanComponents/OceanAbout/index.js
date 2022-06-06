import './styles.css'
import darkWaves from '../../oceanMedia/darkWaves.svg'
import lightWaves from '../../oceanMedia/lightWaves.svg'

const innerWave = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/innerWaveClipped.mp4?alt=media&token=234cc1df-e5c2-4f33-8c92-8b8778823f93'

function OceanAbout() {
  return (
    <section id='OceanAbout'>
      <div className='sectionTwoContent'>
        <h2>
          Leading the way in our field <br />
          since 1993
        </h2>
        <div className='seaButton'>ABOUT US</div>
        <p>
          Keep you and your loved ones safe by following our essential coastal safety advice. Whatever time of the year you visit the coast, you need to know how to protect your family. Some simple steps can help you have a safe and enjoyable trip to the seaside.
          <br /> Bookmark this page now so you'll always have quick access to the best tips and advice on avoiding beach dangers.
        </p>
      </div>
      <img className='twoDarkWaves' src={darkWaves} />
      <div className='lighterRingPosition'>
        <div className='lighterRing'>
          <div className='centerRing' />
          <video loop autoPlay muted className='innerWave' src={innerWave} type='video/mp4' />
        </div>
      </div>
      <img className='twoLightWaves' src={lightWaves} />
      <h3>next</h3>
    </section>
  )
}

export default OceanAbout
