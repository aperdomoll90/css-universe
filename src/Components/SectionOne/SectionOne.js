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
        <div className='content opacity'>
          <h3 className='title'>
            WELCOME
            <div className='border' />
          </h3>
          <p className='text'>CSS Forge is a place to showcase my personal projects - pieces of my creative mind to explore ideas i have or have learned from others. Hope you enjoy them, as much as I enjoyed creating them!</p>
        </div>
        <div className='imgContainer opacity'>
          <Narwhal />
          <Terrarium />
         <div className="faeArea"><FaeLoader/></div> 
          <div className='skillArea'>
              <SkillBar level='90' skillName="html"/>
              <SkillBar level='100' skillName="CSS"/>
              <SkillBar level='80' skillName="React"/>
              <SkillBar level='80' skillName="React Native"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
