import FaeLoader from './Loaders/FaeLoader'
import RainbowVinylLoader from './Loaders/RainbowVinylLoader'
import './styles.css'

function FeaturedLoadersPage() {
  return (
    <div className='featurePageBackground'>
      <div className='banner'>
        <div className='container'>
          <div className='leftSide box'>
            {/* title box  */}
            <p className='formTitle'>Loaders Page</p>
          </div>
          <div className='rightSide box'>{/* first box  */}
          <FaeLoader />
          <RainbowVinylLoader/>
         
              </div>
        </div>
        <div className='container long'>
          <div className='longLeftSide box'>{/* second box  */}</div>
          <div className='longRightSide box'>{/* third box  */}</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedLoadersPage
