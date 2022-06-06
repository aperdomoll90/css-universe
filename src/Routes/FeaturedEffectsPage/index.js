import BouncyLine from '../../Archives/Effects/BouncyLine'
import ChangingColorOnMouseOver from '../../Archives/Effects/ChangingColorOnMouseOver'
import './styles.css'

function FeaturedEffectsPage() {
  return (
    <div className='featurePageBackground'>
      <div className='banner'>
        <div  className='container'>
          <div className='leftSide box'>
            {/* title box  */}
            <p className='formTitle'>User Interaction Effects Page</p>
          </div>
          <div className='rightSide box'>{/* first box  */}
          <BouncyLine/>
          </div>
        </div>
        <div className='container long'>
          <div className='longLeftSide box'>{/* second box  */}
          <ChangingColorOnMouseOver text='CSS HOVER'/>
            </div>
          <div className='longRightSide box'>{/* third box  */}</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedEffectsPage
