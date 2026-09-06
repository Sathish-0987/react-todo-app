import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Product from './components/Pages/Product'
import Service from './components/Pages/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
    
         
}

export default App
