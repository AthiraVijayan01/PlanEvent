import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './LoginFormstyles.css';

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    navigate('/homepage'); // Navigates to the Homepage after successful login
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigates to Forgot Password page
  };

  const handleRegister = () => {
    navigate('/register'); // Navigates to Registration page
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#" onClick={handleRegister}>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
