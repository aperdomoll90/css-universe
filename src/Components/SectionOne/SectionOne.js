import './styles.css'
import Narwhal from '../../Routes/FeaturedCreaturesPage/PettingZoo/Narwhal/Narwhal'
import Terrarium from '../../Routes/FeaturedCreaturesPage/PettingZoo/Terrarium/Terrarium'
import FaeLoader from '../../Routes/FeaturedLoadersPage/Loaders/FaeLoader'
import SkillBar from '../../Routes/FeaturedFormsPage/FormsAndGraphics/SkillBar'

function SectionOne() {
  return (
    <section className='sectionOne'>
      <div className='shadow' />
      <div className='navigationChart'>
        <div className='firstCircle dashedChart'>
          <div className='planetHalo dashedChart'>
            <div className='sun' />
          </div>

          <div className='secondRing dashedChart'>
            <div className='planetHalo dashedChart'>
              <div className='sun' />
            </div>
            <div className='sun' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
