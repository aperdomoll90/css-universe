//  TO CALL THIS FUNCTION IMPORT IT IN THE DESIRED FILE AND CAL IT AS A REGULAR FUNCTION 
// EXAMPLE BELOW IS FOR MULTIPLES ON MOUSEMOVE USING USEREF
// const areaRef = useRef()
// const width = areaRef.current.clientWidth

// const handleMouseMov = e => {
//   const move = (e.nativeEvent.offsetX / width) * 10 
//   const wobbles = document.querySelectorAll('.wobble')

//   wobbles.forEach(wobble => {
//     let {rotate,scale,x,y,z} = getTranslateValues(wobble)
//     wobble.style.transform=`rotate(${rotate}deg) translateX(${move}%)`
//   })
// }





exports.getTranslateValues = element => {
  const style = window.getComputedStyle(element)
  const matrix = style['transform'] || style.webkitTransform || style.mozTransform

  // No transform property. Simply return 0 values.
  if (matrix === 'none' || typeof matrix === 'undefined') {
    return {
      x: 0,
      y: 0,
      z: 0,
    }
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d'
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

  // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
  const a = matrixValues[0]
  const b = matrixValues[1]
  const c = matrixValues[2]
  const d = matrixValues[3]

  const scale = Math.sqrt(a * a + b * b)
  const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === '2d') {
    return {
      rotate: angle,
      scale: scale,
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0,
    }
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14],
    }
  }
}
