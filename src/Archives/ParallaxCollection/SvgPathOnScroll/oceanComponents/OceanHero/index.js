import './styles.css'
const videoBackground = 'https://firebasestorage.googleapis.com/v0/b/cssforge.appspot.com/o/boatDonutClipped.mp4?alt=media&token=2e3442fc-4411-4a7e-b57f-a956e4c66cf7'



function OceanHero() {

  return (
    <section id='oceanHero'>
      <video loop autoPlay muted className='videoBackground'  src={videoBackground} />
      <div class='sPathSvg'/>
      <h3 className='whiteIndicator '>SCROLL</h3>
    </section>
  )
}

export default OceanHero
