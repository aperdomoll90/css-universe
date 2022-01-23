import './styles.css'


function FaeLoader({size}) {

    const faeCircleSize ={
        width:`${size}px`,
        height:`${size}px`,
    }
    const topCircle ={
        width:`${size}px`,
        height:`${size}px`,
        top:`-${size/2.5}px`,
    }
  
  return (
    <div className='FaeLoaderContainer'>
      <div className="faeCircle" style={faeCircleSize}></div>
      <div className="faeCircle" style={faeCircleSize}></div>
      <div className="faeCircle" style={topCircle}></div>
      <p>loading...</p>
    </div>
  )
}

export default FaeLoader


