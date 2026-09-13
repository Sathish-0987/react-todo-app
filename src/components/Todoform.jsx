import React, { useState } from 'react'
import "./Todoform.css"

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
    <div className="todo-list">

        {todos.map((todo, index) => (
          <p className='Task' key={index}>{todo}</p>
        ))}
        
      </div>
      
      </>
  )
}
