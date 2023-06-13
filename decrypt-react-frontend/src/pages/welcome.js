import React from "react";
import Button from "../components/button";
import '../styles/welcome.css'

const Welcome = (props) => {
    return (
        <div className="welcome-page" >
            <div className="transparent-box">
                <div className="welcome-content">
                    <h1>Welcome to Decrypt</h1>
                    <br />
                    <h4>Interested in Cyber Security?</h4>
                    <h4>So are we!</h4>
                </div>
            </div>
        </div>
    )
}

export default Welcome;