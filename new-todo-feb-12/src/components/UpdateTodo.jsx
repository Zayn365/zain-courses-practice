import React from 'react'
import Input from './Input';
import Button from './Button';

const UpdateTodo = props => {
    return <>
    <Input
       placeholder={props.event}
       value = {props.event}
       onChange = {e => props.handleEvent(e)}
       ></Input>
       <Button
       name="Update TODO"
       onClick={() => {
        props.handleUpdate();
        props.handleChange();
    }}
       ></Button>
    </>
}

export default UpdateTodo