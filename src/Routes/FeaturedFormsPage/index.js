import SkillBar from './FormsAndGraphics/SkillBar'
import './styles.css'

function FeaturedFormsPage() {
  return (
    <div className='featurePageBackground'>
      <div className='banner'>
        <div className='container'>
          <div className='leftSide box'>
            <p className='formTitle'>Forms</p>
          </div>
          <div className='rightSide box'>
            <form method='post'>
              <div class='fields'>
                <div class='field half'>
                  <label for='name'>Name</label>
                  <input type='text' name='name' id='name' />
                </div>
                <div class='field half'>
                  <label for='email'>Email</label>
                  <input type='email' name='email' id='email' />
                </div>
                <div class='field'>
                  <label for='message'>Message</label>
                  <textarea name='message' id='message' rows='4'></textarea>
                </div>
              </div>
              <ul class='actions'>
                <li>
                  <input type='submit' value='Send Message' class='button primary' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='container long'>
          <div className='longLeftSide box'>
            <div className='skillArea'>
              <SkillBar level='60' skillName="html"/>
              <SkillBar level='100' skillName="CSS"/>
              <SkillBar level='80' skillName="React"/>
              <SkillBar level='80' skillName="React Native"/>
            </div>
          </div>
          <div className='longRightSide box'></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedFormsPage
