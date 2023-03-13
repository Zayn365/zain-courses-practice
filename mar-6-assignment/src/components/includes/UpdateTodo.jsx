import React from 'react'

const UpdateTodo = props => {
  return (
    <div>
        <form>
        <label>Update Quote</label>
        <br />
        <input type="text" placeholder={props.oldtask} value={props.task} onChange={(e) => props.onChange(e)} />
        <br />
        <button type='submit' onClick={(e) => { e.preventDefault(); props.Reload(); props.Submit();}}>Submit</button>
        <br />
      </form>
    </div>
  )
}

export default UpdateTodo