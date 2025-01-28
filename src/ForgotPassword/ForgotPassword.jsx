import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic (e.g., send email for password reset)
    console.log('Password reset request sent for', email);
    alert('If an account with that email exists, a password reset link will be sent.');
  };

  const handleBack = () => {
    navigate('/'); // Redirects to the login page
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="button-container">
          <button type="submit">Reset Password</button>
          <button type="button" onClick={handleBack} className="back-button">Back</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
