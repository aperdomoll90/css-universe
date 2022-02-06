import { useEffect } from 'react'
import './styles.css'
const hiker = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fhiker.png?alt=media&token=f5c535a2-55a9-413a-a0cd-852885d45205'
const plane2 = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane2.png?alt=media&token=7ddaf0a7-fd3b-4d72-a745-fd82bbf506d9'
const plane3 = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane3.png?alt=media&token=9e7bc464-5270-4e28-a4fb-b08e67d65359'
const backgroundMountain = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2Fplane4.png?alt=media&token=4d2c89ac-dfac-469b-a272-add271a7ac0f'
const sky = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/hiker%20parallax%2FstarrySky.png?alt=media&token=9cd49bbb-f2ca-431d-a825-6e9ff8b0dd60'


function HikerParallax() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset
      let screenWidth = window.screen.width  

      const translate = document.querySelectorAll('.translate')
      const backgroundMountain = document.querySelector('.backgroundMountain')
      const shadow = document.querySelector('.shadow')

      // >>>>>>>>>>>>>>>>>>> TRANSLATE Y
      translate.forEach(element => {
        let speed = element.dataset.speed
        element.style.transform = `translateY(${scroll * speed}px)`
      })

      // <<<<<<<<<<<<<<<<<<<< HEIGHT
      if (shadow) {
        shadow.style.height = `${scroll * 0.5 + 170}px`
      }

      // <<<<<<<<<<<<<<<<<<<< WIDTH
      if (backgroundMountain) {
          if(screenWidth < 992){
            backgroundMountain.style.width = `${-scroll / 15 + 250}vw`
          }
          if(screenWidth > 991){
            backgroundMountain.style.width = `${-scroll / 15 + 100}vw`
          }
      }
    })
  }, [])
  return (
    <div className='HikerParallax'>
      <img src={hiker} className='hiker translate' data-speed='0.3' alt='hiker' />
      <img src={plane2} className='plane2 translate' data-speed='-0.2' alt='mountain forest' />
      <img src={plane3} className='plane3 translate' data-speed='-0.4' alt='medium mountain' />
      <img src={backgroundMountain} className='backgroundMountain' alt='High mountain peeks covered in snow' />
      <img src={sky} className='sky translate' data-speed='-0.3' alt='sky' />
    </div>
  )
}

export default HikerParallax
