import './App.css';
import React, { useEffect } from 'react';
import HelperHooks from './hooks/HelperHooks'
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import List from './components/List';
import Loader from './components/Loader';

function App() {

  const value = [{id: 1 , todos: 'Hello'}];
  const [todo, 
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
    handleLoad] = HelperHooks(value);

 useEffect(()=>{
   
  setTimeout(() => {
      handleLoad();
   }, 3500);

 },[]); //Once MOUNT   

return <>  
{load ?  <Loader />  : <div className="App">
{!change 
? 
<AddTodo todo={todo} handleTodo={handleTodo} handleTodoList={handleTodoList} />
:
<UpdateTodo event={event} handleEvent={handleEvent} handleUpdate={handleUpdate} handleChange={handleChange} />
}
<hr />
<List 
  list={list} 
  handleRemove={handleRemove} 
  handleIdSetter={handleIdSetter} 
  change={change} 
  todo={todo}
  handleChange={handleChange} 
/>
</div> } 
    </>
}
export default App;
