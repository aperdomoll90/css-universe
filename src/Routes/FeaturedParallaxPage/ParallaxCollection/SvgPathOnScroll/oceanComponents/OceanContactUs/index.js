import './styles.css'

import darkWaves from '../../oceanMedia/darkWaves.svg'
import lightWaves from '../../oceanMedia/lightWaves.svg'
import videoFeature from '../../oceanMedia/waves.mp4'

// smallText
function OceanContactUs() {
  return (
    <section id='OceanContactUs'>
      <div className='fiveDefault seaActive'>
      <div className='sectionFiveContent'>
          <h5>Contact</h5>
          <h2>
            Have you any questions?
            <br />
            Or perhaps a business need?
          </h2>
          <p>If you would like to contact us, feel free to get in touch here.</p>
        </div>
        <div className='seaButton contactUsButton contactClick'>CONTACT US</div>

        <div className='circlePosition'>
          <div class='circleVideoVector'>
          <div className='centerRing paleBlueRing' />
            <video loop autoPlay muted className='circleVideo' src={videoFeature} />
          </div>
        </div>
        <img className='fiveDarkWaves' src={darkWaves} />
        <a href='#oceanHero' className='toTop'>
          Back to the top --
        </a>
      </div>
      <div className='seaContactUs seaInactive'>
        <img className='contactDarkWaves' src={darkWaves} />
        <img className='contactLightWaves' src={lightWaves} />

        <div className='sectionFiveContent'>
          <h5>Contact</h5>
          <h2>
            Have you any questions?
            <br />
            Or perhaps a business need?
          </h2>
          <p>Would you like to get in touch to ask a question, tell us about your business requirement or simply because you’d like to hear more about what we do?</p>
        </div>

        <form className='contactMeForm'>
          <input placeholder='Company Name  *' name='company'></input>
          <input placeholder='Email  *' name='email'></input>
          <textarea placeholder='Whats your question ?  *' name='question'></textarea>
          <div className='seaButton formButton'>send</div>
        </form>
      </div>
    </section>
  )
}
export default OceanContactUs
