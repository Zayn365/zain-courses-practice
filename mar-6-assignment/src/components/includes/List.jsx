import React from 'react'
import { useContext } from 'react'
import Auth from '../../Context'

const List = props => {
  const x = useContext(Auth);
  // console.log(x.handletoggleUpd);
//  console.log(location);
  return (
        <div>
        {props.list.map((val,key) => {
            return <>
             <ul key={key} >
                <li key={val.id}>{val.task}</li>
                <li><button onClick={() => {x.handletoggleUpd(); x.handleIdStore(val.id)}}>Update</button> | <button onClick={() => x.handleRemove(val.id)}>Remove</button></li>
                <br />
             </ul>
            </>
        })}
    </div>
  )
}

export default List