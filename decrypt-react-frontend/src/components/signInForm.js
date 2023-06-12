import React, { useState } from "react";
import { useSignin } from "../hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, isLoading } = useSignin();
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      // Reset form fields after successful signin
      setEmail("");
      setPassword("");
      setError(null);
      // Redirect to the home page after successful signin
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3 className="signin-heading">Sign In</h3>

        {error && <p className="signin-error">{error}</p>}

        <div className="signin-input-group">
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="signin-input-group">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="signin-button" disabled={isLoading}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
