import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const HelperFunctions = () => {
 const Value = JSON.parse(window.localStorage.getItem("list") || []);
 const [list , setList] = useState(Value);
 const [task , setTask] = useState('');
 const [updTask , setUpdTask] = useState('');
 const [ idStore , setIdStore] = useState('');

 useEffect(() => {
   window.localStorage.setItem("list" , JSON.stringify(list))
 }, [list] );
 function handleTask(e) {
    setTask(e.target.value);
 }

 function submitList() {
    setList([...list , {id: uuidv4() , task: task}]);
    setTask('');
 }
 function submitUpdTask(e) {
    setUpdTask(e.target.value);
 }
 function handleUpdate() {
   const updList = list.map(val => {
     if (val.id === idStore) {
       return { ...val, task: updTask };
     } else {
       return val;
     }
   });
   setList(updList);
 }
 
 function handleRemove(id) {
    const rmvList = list.filter(val => val.id !== id);
    setList(rmvList);
 }
 function handleIdStore(id) {
   setIdStore(id);
 }
 return [task ,handleTask, list , submitList , updTask , submitUpdTask , handleUpdate , handleRemove, idStore , handleIdStore ];
}

export default HelperFunctions
