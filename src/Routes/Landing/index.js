import { useEffect } from 'react'
import './styles.css'
import RouteWrapper from '../../Components/RouteWrapper'

import SolarSystem from '../../Archives/SolarSystem'
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
    // const sectionSpace = document.querySelectorAll('.content-section')

    // const sectionObserver = new IntersectionObserver(
    //   entries => {
    //     entries.forEach(entry => {
    //       entry.target.classList.toggle('sectionAnimationOpacity', entry.isIntersecting)
    //       // if (entry.isIntersecting) sectionObserver.unobserve(entry.target)
    //     })
    //   },
    //   {
    //     threshold: 1,
    //     rootMargin: '5%',
    //   }
    // )

    // sectionSpace.forEach(card => {
    //   sectionObserver.observe(card)
    })
  }, [])
  return (
    <RouteWrapper>
      <div className='landing-Parallax'>
        {/* <img src={hiker} className='hiker contentOnLoadAnimation' data-speed='1.5' alt='hiker' />
        <img src={plane2} className='plane2  contentOnLoadAnimation' data-speed='1.1' alt='mountain forest' />
        <img src={plane3} className='plane3  contentOnLoadAnimation' data-speed='0.67' alt='medium mountain' />
        <img src={backgroundMountain} className='backgroundMountain  contentOnLoadAnimation' alt='High mountain peeks covered in snow' /> */}

        <img src={layerTwelve} className='layerTwelve contentOnLoadAnimation landing-translate parallax-image' data-speed='1.2' alt='layer' />
        <img src={layerEleven} className='layerEleven contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerTen} className='layerTen contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerNine} className='layerNine contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerEight} className='layerEight contentOnLoadAnimation landing-translate parallax-image' data-speed='2' alt='layer' />
        <img src={layerSix} className='layerSix contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerFive} className='layerFive contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerSeven} className='layerSeven contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerFour} className='layerFour contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerThree} className='layerThree contentOnLoadAnimation landing-translate parallax-image' data-speed='1.5' alt='layer' />
        <img src={layerTwo} className='layerTwo contentOnLoadAnimation landing-translate parallax-image' data-speed='1.2' alt='layer' />
        <img src={layerOne} className='layerOne contentOnLoadAnimation landing-translate parallax-image' data-speed='.5' alt='hiker' />

        <p className='landing-scroll-indicator'>SCROLL</p>
        <div className='landing-bottom-shadow' />
        <SolarSystem />
      </div>

      <section className='content-section'>
        <p className='site-intro-paragraph'>
          CSS Forge is a place to showcase my personal UI designs, CSS tricks and animations.
          <br />
          <br />
          CSS forge a GIF FREE ZONE if is not a picture is code.
          <br />
          <br />
          Hope you enjoy them, as much as I enjoyed creating them!
        </p>
      </section>
    </RouteWrapper>
  )
}

export default Landing
