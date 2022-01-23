import './styles.css'

function FeaturedCreaturesPage() {
  return (
    <div className='featurePageBackground'>
      <div className='banner'>
        <div className='container'>
          <div className='leftSide box'>
            {/* title box  */}
            <p className='formTitle'>Petting Zoo</p>
          </div>
          <div className='rightSide box'>{/* first box  */}</div>
        </div>
        <div className='container long'>
          <div className='longLeftSide box'>{/* second box  */}</div>
          <div className='longRightSide box'>{/* third box  */}</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCreaturesPage
