import { useEffect } from 'react'
import './styles.css'
import RouteWrapper from '../../Components/RouteWrapper'

import StarrySky from '../../Archives/PettingZoo/starySky'
import CosmicChart from '../../Archives/cosmicChart'

import layerOne from './media/layerOne.svg'
import layerTwo from './media/layerTwo.svg'
import layerThree from './media/layerThree.svg'
import layerFour from './media/layerFour.svg'
import layerFive from './media/layerFive.svg'
import layerSix from './media/layerSix.svg'
import layerSeven from './media/layerSeven.svg'
import layerEight from './media/layerEight.svg'
import layerNine from './media/layerNine.svg'
import layerTen from './media/layerTen.svg'
import layerEleven from './media/layerEleven.svg'
import layerTwelve from './media/layerTwelve.svg'
import SolarSystem from '../../Archives/SolarSystem'

function Landing() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset

      const shadow = document.querySelector('.landing-bottom-shadow')
      const indicator = document.querySelector('.landing-scroll-indicator')

      //********* GET the height of the Container Section
      const header = document.querySelector('.landing-Parallax') // ***(Selects Section that Contains the component)
      if (header) {
        let header_height = header.offsetHeight //***( Finds the Height Value of set Section)
        //****** Alter opacity
        shadow && (shadow.style.opacity = -scroll / (header_height / 2) + 1)
        indicator && (indicator.style.opacity = -scroll / (header_height / 2) + 1)
      }
      // >>>>>>>>>>>>>>>>>>> TRANSLATE X and or Y
      const translate = document.querySelectorAll('.landing-translate')

      translate.forEach(element => {
        let speed = element.dataset.speed
        element.style.transform = `translateY(${scroll * speed}px)`
      })
    })

    let sectionCosmicChart = document.querySelectorAll('.content-section')
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('content-section-to-front', entry.isIntersecting)
        })
      },
      { threshold: 1 }
    )

    sectionCosmicChart.forEach(section => {
      sectionObserver.observe(section)
    })
  }, [])
  return (
    <RouteWrapper>
      <div className='landing-Parallax'>
        <img style={{ '--index': 1 }} src={layerTwelve} className='layerTwelve landing-translate parallax-image' data-speed='1.2' alt='brown mountain range' />
        <img style={{ '--index': 2 }} src={layerEleven} className='layerEleven landing-translate parallax-image' data-speed='1.5' alt='cream mountain range' />
        <img style={{ '--index': 3 }} src={layerTen} className='layerTen landing-translate parallax-image' data-speed='1.5' alt='tan mountain range' />
        <img style={{ '--index': 4 }} src={layerNine} className='layerNine landing-translate parallax-image' data-speed='1.5' alt='blue lake in a mountain range' />
        <img style={{ '--index': 5 }} src={layerEight} className='layerEight landing-translate parallax-image' data-speed='2' alt='orange mountain range' />
        <img style={{ '--index': 6 }} src={layerSeven} className='layerSeven landing-translate parallax-image' data-speed='1.5' alt='brown mountain range' />
        <img style={{ '--index': 7 }} src={layerSix} className='layerSix landing-translate parallax-image' data-speed='1.5' alt='salmon mountain range' />
        <img style={{ '--index': 8 }} src={layerFive} className='layerFive landing-translate parallax-image' data-speed='1.5' alt='grey mountain range' />
        <img style={{ '--index': 9 }} src={layerFour} className='layerFour landing-translate parallax-image' data-speed='1.5' alt='green mountain range' />
        <img style={{ '--index': 10 }} src={layerThree} className='layerThree landing-translate parallax-image' data-speed='1.5' alt='light blue mountain range' />
        <img style={{ '--index': 11 }} src={layerTwo} className='layerTwo landing-translate parallax-image' data-speed='1.2' alt='rocks' />
        <img style={{ '--index': 12 }} src={layerOne} className='layerOne landing-translate parallax-image' data-speed='.5' alt='girl looking through a telescope' />
        <SolarSystem />
        <p className='landing-scroll-indicator'>SCROLL</p>
        <div className='landing-bottom-shadow' />
      </div>

      <section className='content-section'>
        {/* <CosmicChart /> */}
        <p className='site-intro-paragraph'>
          CSS Forge is a place to showcase my personal UI designs, CSS tricks and animations.
          <br />
          <br />
          CSS forge a GIF FREE ZONE if is not a picture is code.
          <br />
          <br />
          Hope you enjoy them, as much as I enjoyed creating them!
        </p>

        {/* <StarrySky /> */}
      </section>
      {/* <StarrySky /> */}
    </RouteWrapper>
  )
}

export default Landing
