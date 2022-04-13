import React from 'react'
import './input.css'
function Input(props) {
  const element = props.element === 'input' ? <input
    className={`input ${props.inputClass}`}
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    autoFocus={props.autoFocus}
  /> : <textarea
    className={`textarea ${props.textAreaClass}`}
    id={props.id}
    rows={props.rows || 3}
    type={props.type}
    placeholder={props.placeholder}
  />

  return (<>
    <label htmlFor={props.id} >{props.label}</label>
    {element}
  </>

  )
}

export default Input