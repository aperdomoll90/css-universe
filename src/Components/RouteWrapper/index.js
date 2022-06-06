import React from 'react'
import './styles.css'

function RouteWrapper({ children }) {
  return (
    <div id='route-wrapper'>
      {children}
    </div>
  )
}

export default RouteWrapper
