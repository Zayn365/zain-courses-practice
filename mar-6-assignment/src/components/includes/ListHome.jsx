import React from 'react'
import { useContext } from 'react'
import Auth from '../../Context'

const ListNew = props => {
  const x = useContext(Auth);
  // console.log(x.handletoggleUpd);
//  console.log(location);
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

export default ListNew