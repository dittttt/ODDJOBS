import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header-oddjobs'>
        <a href="" className='thumbtitle'>
          <div>
            <span className='oddtitle'>ODD</span>
            <span className='jobstitle'>JOBS</span>
          </div>
        </a>

        <nav>
          <ul>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default App
