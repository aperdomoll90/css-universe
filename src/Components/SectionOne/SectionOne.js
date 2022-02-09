import './styles.css'
import CosmicChart from '../../Routes/FeaturedNavigationBarsPage/NavBars/cosmicChart'
import PlanetCard from '../../Routes/FeaturedCreaturesPage/PettingZoo/planetCard'
import StarrySky from '../../Routes/FeaturedCreaturesPage/PettingZoo/starySky'

function SectionOne() {
  return (
    <section className='sectionOne'>
      <div className='shadow' />
      <CosmicChart/>
      <PlanetCard/>
      <StarrySky/>

    </section>
  )
}

export default SectionOne
