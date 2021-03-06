import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
function Button(props) {

    if (props.href) {
        return (
            <a
                className={`button button-${props.size}button-${props.variation}
            ${props.danger && 'button-danger'}
            `}
                href={props.href}

            >{props.children}</a>
        )
    }
    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`button button-${props.size}button-${props.variation}
            ${props.danger && 'button-danger '}
            `
                }
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            className={`button button-${props.size || 'default'}button-${props.variation}
    ${props.danger && 'button-danger'}
    ${props.buttonClass}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button