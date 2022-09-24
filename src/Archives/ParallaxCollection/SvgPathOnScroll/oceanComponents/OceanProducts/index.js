import './styles.css'
import rope from '../../oceanMedia/rope.png'
import Anchor from '../../oceanMedia/Anchor.png'
import ScubaTank from '../../oceanMedia/ScubaTank.png'

function OceanProducts() {
  return (
    <section id='OceanProducts'>
      <div className='sectionFourContent'>
        <p>Our product ranges</p>
        <h2 className='sectionFourTittle'>Our three product ranges</h2>
      </div>
      <div className='productCarousel'>
        <div className='productCard'>
          <img className='rope' src={rope} />
          <div className='productButton'>Rope</div>
        </div>
        <div className='productCard'>
          <img className='Anchor' src={Anchor} />
          <div className='productButton'>Anchor</div>
        </div>
        <div className='productCard'>
          <img className='ScubaTank' src={ScubaTank} />
          <div className='productButton'>Tank</div>
        </div>
      </div>
      <div className='seaButton finOutButton'>FIND OUT MORE</div>
      <h3 className='whiteIndicator'>next</h3>
    </section>
  )
}

export default OceanProducts
