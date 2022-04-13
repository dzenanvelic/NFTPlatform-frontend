import React from 'react'
import { NavLink } from 'react-router-dom'
import './navlinks.css'
function Navlinks() {
    return (
        <ul className='navlinks'>
            <li>
                <NavLink className='nav-navlink side' to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink className='nav-navlink side' to='/nft'>NFT</NavLink>
            </li>

            <li>
                <NavLink className='nav-navlink side' to='/blogs'>BLOGS</NavLink>
            </li>
            <li>
                <NavLink className='nav-navlink side' to='/about'>ABOUT</NavLink>
            </li>
            <li>
                <NavLink className='nav-navlink' to='/contact'>CONTACT</NavLink>
            </li>




        </ul>

    )
}

export default Navlinks