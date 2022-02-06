import './styles.css'
import Narwhal from '../../Routes/FeaturedCreaturesPage/PettingZoo/Narwhal/Narwhal'
import Terrarium from '../../Routes/FeaturedCreaturesPage/PettingZoo/Terrarium/Terrarium'
import FaeLoader from '../../Routes/FeaturedLoadersPage/Loaders/FaeLoader'
import SkillBar from '../../Routes/FeaturedFormsPage/FormsAndGraphics/SkillBar'

function SectionOne() {
  return (
    <section className='sectionOne'>
      <div className='shadow' />
      <div className='container'>
        <div className='content opacity' data-speed='-1.3'>
          <h3 className='title'>
            WELCOME
            <div className='border' />
          </h3>
          <p className='text'>CSS Forge is a place to showcase my personal projects - pieces of my creative mind to explore ideas i have or have learned from others. Hope you enjoy them, as much as I enjoyed creating them!</p>
        </div>

      </div>
    </section>
  )
}

export default SectionOne
