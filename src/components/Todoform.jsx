import React from 'react'
import "./Todoform.css"

export default function Todoform() {
  return (
    <form className='todo-form'>
        <input type='text' placeholder='Enter a Task'/>
        <button>Add</button>
    </form>
  )
}
