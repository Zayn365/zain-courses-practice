import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const HelperFunctions = () => {
 const Value = JSON.parse(window.localStorage.getItem("list") || []);
 const [list , setList] = useState(Value);
 const [task , setTask] = useState('');
 const [updTask , setUpdTask] = useState('');

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
 function handleUpdate(id) {
   const updList = list.map(val => {
    return val.id === id ? [...val , {task: updTask }] : val
   })
   setList(updList);
 }
 function handleRemove(id) {
    const rmvList = list.filter(val => val.id !== id);
    setList(rmvList);
 }

 return [task ,handleTask, list , submitList , updTask , submitUpdTask , handleUpdate , handleRemove ];
}

export default HelperFunctions
