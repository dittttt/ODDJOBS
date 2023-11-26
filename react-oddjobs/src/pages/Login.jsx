import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import '../App.css'

function Login() {
    return(
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
        {/* END OF HEADER SECTION */}
        {/* LOGIN FORM */}
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
                <Link to="/register" className="linkunderlined">Register here!</Link>
                </div>
                <div>
                 <Link to="/forgot" className="linkunderlined">Forgot Password?</Link> 
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;