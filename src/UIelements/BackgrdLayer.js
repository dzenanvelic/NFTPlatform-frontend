import React from 'react'
import './backgrdlayer.css'
function BackgrdLayer(props) {
    return (
        <div className='background-layer' onClick={props.onClick}>{props.children}</div>
    )
}

export default BackgrdLayer