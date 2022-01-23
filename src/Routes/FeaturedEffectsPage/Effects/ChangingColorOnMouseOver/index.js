import { useRef, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import './styles.css'

function ChangingColorOnMouseOver(data) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const ref = useRef()
  let text = data.text
  const {x,y} = coords
  const maskStyle = {
      '--maskX':x,
      '--maskY':y,
  }

//   useEffect(()=>{
//       console.log("maskStyle", maskStyle)
//   },[maskStyle])

  const handleMouseMov = e => {
    const width = ref.current.clientWidth
    const height = ref.current.clientHeight
    const offX = (e.nativeEvent.offsetX / width) * 100
    const offY = (e.nativeEvent.offsetY / height) * 100
    setCoords({
         x: offX, 
         y: offY 
        })
  }

  const handleMouseOut = e => {
    setCoords({
         x: 0, 
         y: 0 
        })
  }

  return (
    <div id='mouseOverTextWrapper'>
      <div className='mouseOverTextContainer' 
      onMouseMove={handleMouseMov}
      onMouseOut={handleMouseOut}
      style={maskStyle}
      ref={ref} 
      >
        <div className='mouseOverTextTitleWrapper'>
          <h1>{text}</h1>
        </div>
        <div className='mouseOverTextTitleWrapper mouseOverTexCloneWrapper'>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default ChangingColorOnMouseOver
