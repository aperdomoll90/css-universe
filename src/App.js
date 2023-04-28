import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Routes/Landing/Landing'
import Resume from './Routes/resume/Resume'
import NavBar from './Components/navBar'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/resume' component={Resume} />
          <Route path='/' component={Landing} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
