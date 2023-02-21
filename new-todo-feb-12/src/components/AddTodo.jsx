import React from 'react'
import Input from './Input';
import Button from './Button';

const AddTodo = props => {
  return <>
  <Input
     placeholder="Enter Todo"
     value = {props.todo}
     onChange = {e=>props.handleTodo(e)}
     ></Input>
     <Button
     name="Add TODO"
     onClick={() => props.handleTodoList()}
     ></Button>
  </>
}

export default AddTodo