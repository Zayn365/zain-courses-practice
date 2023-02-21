import React from 'react'

const Button = props => {
  return <div>
    <button
  onClick={props.onClick}
  disabled={props.disabled}
  >
    {props.name}
  </button>
  </div>
}

export default Button