import '../App.css'
import { Link } from 'react-router-dom'


function Change() {
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
            {/* CHANGE YOUR PASSWORD FORM */}
            <div className="card-form">
            <form action='/decision'>
                <h1>CHANGE YOUR PASSWORD</h1>
                <div className="content">
                {/* Names */}
                <div className="input-field">
                    <input type="text" placeholder="New Password" autoComplete="nope" />
                </div>
                <div className="input-field">
                    <input
                    type="text"
                    placeholder="Confirm Password"
                    autoComplete="nope"
                    />
                </div>
                <button className="submit-button">SUBMIT</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default Change