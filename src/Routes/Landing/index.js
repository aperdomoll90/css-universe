import { useEffect } from 'react'
import './styles.css'
import RouteWrapper from '../../Components/RouteWrapper'

import SolarSystem from '../../Archives/SolarSystem'

const hiker = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fhiker.png?alt=media&token=f5c535a2-55a9-413a-a0cd-852885d45205'
const plane2 = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane2.png?alt=media&token=7ddaf0a7-fd3b-4d72-a745-fd82bbf506d9'
const plane3 = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane3.png?alt=media&token=9e7bc464-5270-4e28-a4fb-b08e67d65359'
const backgroundMountain = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane4.png?alt=media&token=4d2c89ac-dfac-469b-a272-add271a7ac0f'

function Landing() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset

      const hiker = document.querySelector('.hiker')
      const plane2 = document.querySelector('.plane2')
      const plane3 = document.querySelector('.plane3')
      const backgroundMountain = document.querySelector('.backgroundMountain')
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
      if (hiker) {
        hiker.style.transform = `translateY(${scroll * 1.5}px)`
      }
      if (plane2) {
        plane2.style.transform = `translateX(${scroll * 0.4}px) translateY(${scroll * 1}px)`
      }
      if (hiker) {
        plane3.style.transform = `translateX(${scroll * -0.4}px) translateY(${scroll * 1}px)`
      }
      if (backgroundMountain) {
        backgroundMountain.style.transform = `translateX(${scroll * -1.5}px) translateY(${scroll * 0.8}px)`
      }
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
    // })
  }, [])
  return (
    <RouteWrapper>
      <div className='landing-Parallax'>
        <img src={hiker} className='hiker contentOnLoadAnimation' data-speed='1.5' alt='hiker' />
        <img src={plane2} className='plane2  contentOnLoadAnimation' data-speed='1.1' alt='mountain forest' />
        <img src={plane3} className='plane3  contentOnLoadAnimation' data-speed='0.67' alt='medium mountain' />
        <img src={backgroundMountain} className='backgroundMountain  contentOnLoadAnimation' alt='High mountain peeks covered in snow' />
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
