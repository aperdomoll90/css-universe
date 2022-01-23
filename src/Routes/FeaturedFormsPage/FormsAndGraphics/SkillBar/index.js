import './styles.css'

function SkillBar({level, skillName}) {
    const skillWidth ={
        maxWidth:`${level}%`
    }
  return (
    <div className='skill'>
      <div className='skill-name'>{skillName}</div>
      <div className='skill-bar'>
        <div className='skill-per' per={`${level}%`} style={skillWidth}></div>
      </div>
    </div>
  )
}

export default SkillBar
