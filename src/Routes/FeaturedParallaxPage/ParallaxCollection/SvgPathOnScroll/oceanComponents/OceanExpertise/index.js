import './styles.css'

import boat from '../../oceanMedia/boat.jpeg'
import darkWaves from '../../oceanMedia/darkWaves.svg'

function OceanExpertise() {
    return (
        <section id='OceanExpertise'>
        <img className='threeDarkWaves' src={darkWaves} />
        <div className="OceanExpertiseImageContainer">
        <img src={boat} />
        </div>
        <div className='sectionThreeContent'>
          <h5>Expertise</h5>
          <h2>Find out more about our expertise</h2>
          <p>Keep you and your loved ones safe by following our essential coastal safety advice. Whatever time of the year you visit the coast, you need to know how to protect your family. Some simple steps can help you have a safe and enjoyable trip to the seaside.</p>
        </div>
        <h3>next</h3>
      </section>
    )
}
export default  OceanExpertise