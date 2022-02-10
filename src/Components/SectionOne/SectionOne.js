import './styles.css'
import CosmicChart from '../../Routes/FeaturedNavigationBarsPage/NavBars/cosmicChart'
import PlanetCard from '../../Routes/FeaturedCreaturesPage/PettingZoo/planetCard'
import StarrySky from '../../Routes/FeaturedCreaturesPage/PettingZoo/starySky'

function SectionOne() {
  return (
    <section className='sectionOne'>
      <CosmicChart />
      <PlanetCard />
      <StarrySky />
      <p>
        CSS Forge is a place to showcase my personal UI designs, CSS tricks and animations.
        <br />
        <br />
        CSS forge a GIF FREE ZONE if is not a picture is code.
        <br />
        <br />
        Hope you enjoy them, as much as I enjoyed creating them!
      </p>
  
    </section>
  )
}

export default SectionOne
