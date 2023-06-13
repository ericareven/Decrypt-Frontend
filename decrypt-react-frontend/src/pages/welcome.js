import React from "react";
import Button from "../components/button";
import '../styles/welcome.css'

const Welcome = (props) => {
    return (
        <div className="welcome-page" >
            <div className="transparent-box">
                <div className="welcome-content">
                    <h1>Welcome Page</h1>
                    <p>Welcome to Decrypt!</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;