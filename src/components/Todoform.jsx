import React, { useState } from 'react'
import "./Todoform.css"

export default function Todoform() {
  const [task,setTask]=useState("");
  const handleSubmit = (e) => { e.preventDefault(); 
    console.log(task);
     setTask('');
  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}
