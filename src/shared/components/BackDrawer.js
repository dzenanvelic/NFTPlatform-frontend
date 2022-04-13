import React from 'react'
import './backdrawer.css'
import { CSSTransition } from 'react-transition-group'
function BackDrawer(props) {
    return (
        <CSSTransition
            in={props.show}
            timeout={300}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit

        >

            <div className='backdrawer' onClick={props.onClick} >{props.children}</div>
        </CSSTransition>
    )
}

export default BackDrawer