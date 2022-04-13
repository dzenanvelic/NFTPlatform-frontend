import React from 'react'
import './mainnavigation.css'
function MainNavigation(props) {
  return (
    <div className='main-nav-header'>{props.children}</div>
  )
}

export default MainNavigation