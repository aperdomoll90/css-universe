import React from 'react'
import './styles.css'
import Hero from '../../Components/hero'

function Landing() {
  return (
    <main>
      <Hero />
      <div id='skills'>
        <div className='shadow' />
      </div>
      <section>
        <p>test</p>
</section>
      <div id='footer' className='container'>
        <p className='footerText'>© 2023 Adrian Perdomo Portfolio. All Rights Reserved. Published with React</p>
      </div>
    </main>
  )
}

export default Landing
