import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div class="header">
      <div class="inner_header"> 
          <a class="logo_container" href="index.html">
              <div class="logo_box">
                  <h1>ODD<span>JOBS</span></h1>
              </div>
          </a>
          <ul class="nav">
              <a href="login.html" onclick="changeColor(this)"><li>SIGN IN</li></a>
          </ul>
      </div>
  </div>

  <div class="container">
        
        <div class="card-form">
            <form>
                <h1>CHANGE YOUR PASSWORD</h1>
                <div class="content">

                    <div class="input-field">
                      <input type="text" placeholder="New Password" autocomplete="nope"/>
                    </div>
                    <div class="input-field">
                      <input type="text" placeholder="Confirm Password" autocomplete="nope"/>
                    </div>
                    <button class="submit-button">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default App
