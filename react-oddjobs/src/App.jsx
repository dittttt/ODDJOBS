import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
      
      <ul>
        <li className='navbar-links'><a href="">About Us</a></li>
        <li className='navbar-links'><a href="">More!</a></li>
        <li className='navbar-links'><a href="">More!</a></li>
        <li className='navbar-links'><a href="">More!</a></li>
        <li className='navbar-links'><a href="">More!</a></li>
        <li className='navbar-links'><a href="">More!</a></li>
      </ul>      
    </div>
    </>
  )
}

export default App