import React , {useEffect} from 'react'
import Button from './Button'
import HelperHooks from '../hooks/HelperHooks';
import Loader from './Loader';
const List = props => {
  
  const [load , handleLoad] = HelperHooks();
  console.log(load)
  useEffect(()=>{
   
    setTimeout(() => {
        handleLoad();
     }, 3500);
  
   } , [props.todo]); //MOUNT MULTIPLE TIMES IF CONDITION IS TRUE  
  return <>
 { load ? <Loader /> : props.list.map(val => {
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
     {/* CONDITIONAL & MAPPING END */}
    
    
      </>
}

export default List;