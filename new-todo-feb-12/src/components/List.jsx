import React from 'react'
import Button from './Button'

const List = props => {
  return <>
  {props.list.map(val => {
      return <ul>
        <li key={val.id}>
          {val.todos}
          <Button
          name="Remove"
          disabled = {props.change}
          onClick={() => props.handleRemove(val.id)}
          ></Button>
          <Button
          name="Update"
          disabled = {props.change}
          onClick={() => {
            props.handleIdSetter(val.id);
            props.handleChange();}}
          ></Button>
        </li>
      </ul>
     })}
  
  </>
}

export default List