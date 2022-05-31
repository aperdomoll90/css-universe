import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import CircularNav from './Components/Navigation'

// >>>>>>>>>>>>>> ROUTES IMPORTS <<<<<<<<<<<<<<<<<<<<<<<
import Landing from './Routes/Landing/'
import FeaturedFormsPage from './Routes/FeaturedFormsPage/'
import FeaturedNavigationBarsPage from './Routes/FeaturedNavigationBarsPage/'
import FeaturedEffectsPage from './Routes/FeaturedEffectsPage'
import FeaturedLoadersPage from './Routes/FeaturedLoadersPage/'
import FeaturedCreaturesPage from './Routes/FeaturedCreaturesPage/'
import Featured3DCSSPage from './Routes/Featured3DCSSPage/3dCollection/Universe3D'
import FeaturedParallaxPage from './Routes/FeaturedParallaxPage'





function App() {


  return (
    <Router>
      <CircularNav />
      <Switch>
      <Route path='/parallax' component={FeaturedParallaxPage} />
        <Route path='/3d' component={Featured3DCSSPage} />
        <Route path='/creatures' component={FeaturedCreaturesPage} />
        <Route path='/effects' component={FeaturedEffectsPage} />
        <Route path='/navs' component={FeaturedNavigationBarsPage} />
        <Route path='/forms' component={FeaturedFormsPage} />
        <Route path='/loaders' component={FeaturedLoadersPage} />
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  )
}

export default App
