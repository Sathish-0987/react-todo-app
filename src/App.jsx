import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Todoform from './components/Todoform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Todoform/>
      
    </div>
    </BrowserRouter>
  );
    
         
}

export default App
