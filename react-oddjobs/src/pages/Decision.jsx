import React from "react"
import { Link } from "react-router-dom"
import Customer from "../assets/img/customer.png"
import Workers from "../assets/img/workers.png"
import '../App.css'

function Decision() {
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
            {/* DECISION */}
            <div className="container-decision">
            <button className="decision-button">
                <h1>CUSTOMER</h1>
                <img src={ Customer } />
                <div className="description-decision-button">
                <p>HIRE WORKERS TO DO CERTAIN ODDJOBS</p>
                </div>
            </button>
            <button className="decision-button">
                <h1>WORKERS</h1>
                <img src={ Workers } />
                <div className="description-decision-button">
                <p>WORK AND GET PAID WITH ODDJOBS</p>
                </div>
            </button>
            </div>
        </div>
        </>
    )
}

export default Decision