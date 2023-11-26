import React from "react"
import { Link } from "react-router-dom"
import '../App.css'

export default function Profile() {
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
            <div className="profile-container">
            <div className="profile-picture">
                <img src="img\sampleProfilePic.jpg" />
            </div>
            <div className="profile-card">
                <div className="profile-description">
                <h1>JIM MORISSON</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>jimMorisson@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <th>Contact No.</th>
                        <td>0912 345 6789</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <th>Birthday</th>
                        <td>12/08/1943</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <th>Address</th>
                        <td>Melbourne, Florida, United States</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}