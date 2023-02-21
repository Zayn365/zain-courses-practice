import { useState } from "react"
import { v4 } from 'uuid'

function HelperHooks (initalVal) {
  const [todo , setTodo] = useState('');
  const [list , setList] = useState(initalVal);
  const [event , setEvent] = useState('');
  const [change , setChange] = useState(false);
  const [idSetter , setIdSetter] = useState();
  const [load , setLoad] = useState(true);

  const handleChange = () => {
    setChange(!change);
  }
  
  const handleLoad = () => {
    setLoad(!load);
  }

  const handleIdSetter = (val) => {
    setIdSetter(val);
  }
  
  const handleTodo = e => {
    let val = e.target.value;
    setTodo(val)
  } 
  
  const handleEvent = e => {
    setEvent(e.target.value);
  }
  
  const handleTodoList = () => {
    if(todo) setList(list.concat( {id: v4() , todos:todo} ) ); setTodo('');
  } 
  
  const handleRemove = (id) => {
     const removing = list.filter(val => val.id !== id);
     setList(removing);
  }
  
  const handleUpdate = () => {
    const updating = list.map(val => val.id === idSetter ?  {...val , todos: event } : val
        );

    setList(updating);
    // handleChange();
    setEvent('');    
  } 
  console.log(idSetter);
  return [todo, 
    handleTodo,
    list,
    handleTodoList, 
    event, 
    handleEvent, 
    handleRemove, 
    handleUpdate, 
    change, 
    handleChange, 
    handleIdSetter,
    load,
    handleLoad
  ];
}

export default HelperHooks