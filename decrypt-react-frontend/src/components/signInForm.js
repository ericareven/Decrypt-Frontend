import { useState } from "react";
import { useSignin } from "../hooks/useSignIn";
// import '../styles/signin';  

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, isLoading } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3 className="signin-heading">Sign In</h3>

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
