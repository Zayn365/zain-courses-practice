import React from 'react'

const List = props => {
  
  return (
    <div>
        {props.list.map((val,key) => {
            return <>
             <ul key={key} >
                <li key={val.id}>{val.task}</li>
                <br />
             </ul>
            </>
        })}
        
        
    </div>
  )
}

export default List