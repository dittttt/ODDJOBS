import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import '../App.css'

function ForgotPassword() {
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
            {/* FORGOT PASSWORD FORM */}
            <div className="card-form">
            <form>
                <h1>FORGOT PASSWORD?</h1>
                <div className="content">
                {/* Names */}
                <div className="input-field">
                    <input type="email" placeholder="Email" autoComplete="nope" />
                </div>
                <button className="submit-button">SUBMIT</button>
                <div className="check-inbox">
                    <div className="info-icon">i</div>
                    <p>
                    Please click the link in your inbox, you will receive it shortly
                    </p>
                </div>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;