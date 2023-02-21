import React from 'react'

const Input = props => {
  return <div>
    <input 
  onChange={props.onChange}
  value={props.value}
  placeholder={props.placeholder}
  />
  </div>
}

export default Input