import React from 'react';
import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import '../styles/signin.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, isLoading } = useRegister(process.env.REACT_APP_BASE_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, username, email, password);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3 className="signin-heading">Create an Account</h3>

        <div className="register-input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="register-input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="register-input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="register-input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="button" disabled={isLoading}>
          Register
        </button>

        {error && <div className="register-error">{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm;