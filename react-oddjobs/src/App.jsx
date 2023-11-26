import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
  <div className="header">
    <div className="inner_header">
      <a className="logo_container" href="index.html">
        <div className="logo_box">
          <h1>
            ODD<span>JOBS</span>
          </h1>
        </div>
      </a>
      <ul className="nav">
        <a href="login.html" onclick="changeColor(this)">
          <li>SIGN IN</li>
        </a>
      </ul>
    </div>
  </div>

  
  <div className="card-form">
    <form>
      <h1>LOGIN</h1>
      <div className="content">
        <div className="input-field">
          <input type="email" placeholder="Email" autoComplete="nope" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
        <button className="submit-button">Sign in</button>
        <div>
          Don't have an account?{" "}
          <a href="register.html" className="linkunderlined">
            Register here
          </a>{" "}
        </div>
        <a href="forgot-password.html" className="linkunderlined">
          Forgot Your Password?
        </a>
      </div>
    </form>
  </div>
    </>
  )
}

export default App
