
import './styles.css'
import CircularNav from '../../Archives/NavBars/CircularNav'
import RollingBallNav from '../../Archives/NavBars/RollingBallNav'
import HamburgerMenuToggle from '../../Archives/NavBars/HamburgerMenuToggle'

function NavigationBarsPage() {
  return (
    <div className='featurePageBackground'>
      <div className='banner'>
        <div className='container'>
          <div className='leftSide box'>
            {/* title box  */}
            <p className='formTitle'>Navigation Bars</p>
          </div>
          <div className='rightSide box'>
            {/* first box  */}
            <div className='topNavFeatureContainer'>
              <RollingBallNav />
            </div>
            <div className='bottomNavFeatureContainer'>
              <CircularNav />
            </div>
          </div>
        </div>
        <div className='container long'>
          <div className='longLeftSide box'>
            {/* second box  */}
            <HamburgerMenuToggle />
          </div>
          <div className='longRightSide box'>{/* third box  */}</div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBarsPage
