import React from "react";
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center">
            <div className="container mx-auto text-center p-5 bg-white rounded-lg shadow-2xl">
                <h1 className="text-6xl font-bold text-purple-600 mb-5 border-b-2 pb-2">Test Page</h1>
                <p className="text-2xl text-blue-600 mb-10">This is a test</p>
                <div className="flex justify-center space-x-5 mb-5">
                    <Link to="/signin">
                        <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Test;