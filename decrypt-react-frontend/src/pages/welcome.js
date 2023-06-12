import React from "react";
import Button from "../components/button";
// import './Home.css';

const Welcome = (props) => {
    return (
        <div className="welcome">
            <div className="transparent-box">
                <div className="welcome-content">
                    <h1>Welcome Page</h1>
                    <p>Welcome to Decrypt!</p>
                    <div className="welcome-content-buttons">
                        <Button to="/posts" label="Posts"/>
                        <Button to="/register" label="Register"/>
                        <Button to="/signin" label="Sign In"/>
                    </div>
                </div>
                {/* <img className="home-img" src="/home15.png"></img> */}
            </div>
        </div>
    )
}

export default Welcome;