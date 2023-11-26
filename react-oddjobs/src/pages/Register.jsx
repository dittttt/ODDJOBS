import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return(
<>
  {/* HEADER SECTION */}
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
  {/* END OF HEADER SECTION */}
  <div className="container">
    <Link to="/login" className="back-button">← Back</Link>
    {/* REGISTER FORM */}
    <div className="card-form">
      <form action='/decision'>
        <h1>SIGN UP</h1>
        <div className="content">
          {/* Names */}
          <div className="input-field">
            <input type="text" placeholder="First Name" autoComplete="nope" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Last Name" autoComplete="nope" />
          </div>
          {/* Birthday, Address, Phone Number */}
          <div className="input-field">
            <input type="birthday" placeholder="Birthday" autoComplete="nope" />
          </div>
          <div className="input-field">
            <input
              type="address"
              placeholder="Current Address"
              autoComplete="nope"
            />
          </div>
          <div className="input-field">
            <input
              type="tel"
              placeholder="Contact No. (09xx xxx xxx)"
              autoComplete="nope"
            />
          </div>
          {/* Email and Password */}
          <div className="input-field">
            <input type="email" placeholder="Email" autoComplete="nope" />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Confirm Email"
              autoComplete="nope"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
          </div>
          <button className="submit-button">CONTINUE</button>
        </div>
      </form>
    </div>
  </div>
</>
    )
}

export default Register;