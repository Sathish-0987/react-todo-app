import React, { useState } from 'react'
import "./Todoform.css"
import TodoList from './TodoList';

export default function Todoform() {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  const handleSubmit = (e) => { e.preventDefault(); 
    if (task.trim() === "") return;

    setTodos([...todos, task]);
     setTask('');
  };
  return (
    <>
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
    <TodoList todos={todos} />
      
      </>
  )
}
