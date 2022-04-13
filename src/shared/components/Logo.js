import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'
function Logo() {
    return (
        <h1 className='logo-title'>
            <Link to='/' className='logo-link'>
                NFT FREAKS
            </Link>

        </h1>
    )
}

export default Logo