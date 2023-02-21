import './App.css';
import React from 'react';
import HelperHooks from './hooks/HelperHooks'
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import List from './components/List';

function App() {

  const value = [{id: 1 , todos: 'Hello'}];
  const [todo , handleTodo , list , handleTodoList , event ,handleEvent, handleRemove, handleUpdate , change , handleChange, handleIdSetter] = HelperHooks(value);

return <div className="center">
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
       handleChange={handleChange} 
     />
  </div>
    }

export default App;
