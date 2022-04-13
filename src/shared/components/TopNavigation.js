import React, { useState } from 'react'
import BackgrdLayer from '../../UIelements/BackgrdLayer'
import BackDrawer from './BackDrawer'
import Logo from './Logo'
import MainNavigation from './MainNavigation'
import Navlinks from './Navlinks'
import './topnavigation.css'
function TopNavigation(props) {

  const [openDrawer, setOpenDrawer] = useState(false)

  const openSideDraver = () => setOpenDrawer(true)
  const closeSideDraver = () => setOpenDrawer(false)
  return (<>




    {openDrawer && <BackgrdLayer onClick={closeSideDraver} />}
    <BackDrawer show={openDrawer} onClick={closeSideDraver} >
      <Navlinks />
    </BackDrawer>

    <MainNavigation>

      <button onClick={openSideDraver} className='main-navigation-button'>
        <span className='span-burger-button'></span>
        <span className='span-burger-button'></span>
        <span className='span-burger-button'></span>
      </button>
      <Logo />

      <Navlinks />


    </MainNavigation>
  </>





  )
}

export default TopNavigation