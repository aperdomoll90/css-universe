import { useEffect } from 'react'
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
import Featured3DCSSPage from './Routes/Featured3DCSSPage/'
import FeaturedParallaxPage from './Routes/FeaturedParallaxPage'




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IMPORTANT NOTES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>  ADD EVENT LISTENER TO SCROLL <<<<<<<<<<<<<<<<<<
// window.addEventListener('scroll', () => {

// GET SCROLL VALUE
// SET SELECTOR VARIABLES
// GET VARIABLE QUALITIES/ CHARACTERISTICS
// ADD ALL FUNCTIONS HERE

// })

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLE OF FUNCTIONS AND VARIABLES <<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>> BASIC VARIABLE STRUCTURE

// SCROLL
// let scroll = window.pageYOffset     ***(Gets the number of px by which we scrolled upward and place it in the variable scroll)

// let screenWidth = window.screen.width                       // GETS SCREEN WIDTH
// const plane4Width = componentSelectorVariable.style.width   //  TO GET CSS PROPERTY OF A COMPONENT

//  SELECTOR FOR SINGLE COMPONENT
// const component = document.querySelector('.className')

//  SELECTOR FOR MULTIPLE COMPONENT
// const componentAll = document.querySelectorAll('.className')

// GET SECTION VALUES TO USE EFFECTS ON LOWER SECTIONS
//  const containerSection = document.querySelector('.ClassName')      ***(Selects Section that Contains the component)
//  let containerSection_height = containerSection.offsetHeight        ***( Finds the Height Value of set Section)
//  let sectionY = containerSection.getBoundingClientRect()            ***(Finds the top position of set Section relative to viewport)

// >>>>>>>>>>>>>>>>>>> BASIC FUNCTION STRUCTURE

//  FOR SINGLE COMPONENT
// component.style.cssStylingProperty = Formula to calculate value based on scroll value, speed and/or height of area of effect

// FOR MULTIPLE COMPONENTS
// componentAll.forEach( element =>{
// element.style.cssStylingProperty = Formula to calculate value based on scroll value, speed and/or height of area of effect
// })

//  >>>>>>>>>> TRANSLATE Y or X
//  **** To move multiple components of class .translate up and down the Y axis based on the specified data-speed

//  THIS WORKS FOR THE TOP HEADER/HERO IMAGES
//  const translate = document.querySelectorAll('.translate');
//  translate.forEach(element => {
//   let speed = element.dataset.speed
//   element.style.transform = `translateY(${scroll * speed}px)`
// })

//  >>>>>>>>>> TRANSLATE SINGLE COMPONENT BASED ON HEIGHT AND TOP POSITION RELATIVE TO VIEWPORT
// >>>>> AKA COMPONENTS ON LOWER SECTIONS
//  const component = document.querySelector('.componentClassName')   ***(Selects component we want to Apply action to)
//  const section = document.querySelector('.sectionClassName')       ***(Selects Section that Contains the component)
//  let section_height = section.offsetHeight                         ***(Finds the Height Value of set Section)
//  let sectionY = section.getBoundingClientRect();                   ***(Finds the top position of set Section relative to viewport)

// TO MOVE DOWN
//  set CSS component   transform: translateY(-100px);
// component.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 100 - 100}px)`;
// TO MOVE ON OPPOSITE DIRECTION JUST INVERT NUMERIC VALUES
//  set CSS component   transform: translateY(100px);
// component.style.transform = `translateY(${(scroll / (section_height + sectionY.top)) * -100 + 100}px)`;
//

// >>>>>>>>>>>> OPACITY
// ****** To control opacity on single element using the scroll value and height of the section they are on

// ********* GET the height of the Container Section
//  const header = document.querySelector('.heroArea')      ***(Selects Section that Contains the component)
//  let header_height = header.offsetHeight                 ***( Finds the Height Value of set Section)

// ****** Alter opacity value to the result of this formula that gives us a value between 0 and 1 based on the scroll value and section height
// SingleComponentVariableName.style.opacity = -scroll / (header_height / 2) + 1

//  >>>>>>>>>> CONTROL OPACITY OF MULTIPLE COMPONENTS BASED ON HEIGHT AND TOP POSITION RELATIVE TO VIEWPORT
// >>>>> AKA COMPONENTS ON LOWER SECTIONS

//  const opacity = document.querySelectorAll('.opacity')              ***(Selects ALL .OPACITY COMPONENTS)
//  const section = document.querySelector('.sectionClassName')       ***(Selects Section that Contains the component)
//  let section_height = section.offsetHeight                         ***(Finds the Height Value of set Section)
//  let sectionY = section.getBoundingClientRect();                   ***(Finds the top position of set Section relative to viewport)

// opacity.forEach(element => {
//   element.style.opacity = scroll / (section_height + sectionY.top);
// })

// <<<<<<<<<<<<<<<<<<<< HEIGHT
//  CONTROL Height Value to results of formula
//  SingleComponentVariableName.style.height = `${scroll * 0.5 + valueOfCurrentComponentHeight}px`;

// <<<<<<<<<<<<<<<<<<<< WIDTH
//  CONTROL width Value to results of formula using section height and section top relative to viewport
//  !!!!!!! example of component on a lower section

//  SingleComponentVariableName.style.width = `${scroll / (section_height + sectionY.top) * 30}%`

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IMPORTANT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset
      let screenWidth = window.screen.width // GETS SCREEN WIDTH

      const translate = document.querySelectorAll('.translate')
      const opacity = document.querySelectorAll('.opacity')

      const hiker = document.querySelector('.hiker')
      const plane4 = document.querySelector('.plane4')
      const heroTitleBox = document.querySelector('.heroTitleBox')

      const shadow = document.querySelector('.shadow')
      const content = document.querySelector('.content')
      const imgContainer = document.querySelector('.imgContainer')
      const border = document.querySelector('.border')

      // HERO SECTION VARIABLES
      const header = document.querySelector('.heroArea')
      if (header) {
        let header_height = header.offsetHeight

        // <<<<<<<<<<<<<<<<<<<< OPACITY
        heroTitleBox.style.opacity = -scroll / (header_height / 2) + 1
        hiker.style.opacity = -scroll / (header_height / 1) + 1
      }

      // SECTION ONE VARIABLES
      const sectionOne = document.querySelector('.sectionOne')
      if (sectionOne) {
        let sectionOne_height = sectionOne.offsetHeight
        let sectionOneY = sectionOne.getBoundingClientRect()
        let contentValue = (scroll / (sectionOne_height + sectionOneY.top)) * 100 - 60

        opacity.forEach(element => {
          element.style.opacity = scroll / (sectionOne_height + sectionOneY.top)
        })

        if (contentValue < 34.0443) {
          border.style.width = `${(scroll / (sectionOne_height + sectionOneY.top)) * 190}%`
          content.style.transform = `translateY(${(scroll / (sectionOne_height + sectionOneY.top)) * 100 - 60}px)`
          imgContainer.style.transform = `translateY(${(scroll / (sectionOne_height + sectionOneY.top)) * -100 + 100}px)`
        }
      }

      // >>>>>>>>>>>>>>>>>>> TRANSLATE Y
      translate.forEach(element => {
        let speed = element.dataset.speed
        element.style.transform = `translateY(${scroll * speed}px)`
      })

      if (heroTitleBox && screenWidth < 800) {
        heroTitleBox.style.opacity = 0
      }

      // <<<<<<<<<<<<<<<<<<<< HEIGHT
      if (shadow) {
        shadow.style.height = `${scroll * 0.5 + 170}px`
      }

      // <<<<<<<<<<<<<<<<<<<< WIDTH
      if (plane4) {
        plane4.style.width = `${-scroll * 1.5 + 1900}px`

        if (screenWidth < 1050) {
          plane4.style.width = `${-scroll * 1.5 + 1990}px`
        }
      }
    })
  }, [])

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
