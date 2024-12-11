import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Button from '../../components/button.js';
import { colors } from '../../components/colors.js';

const Register = () => {
  const navigate = useNavigate();

  // State hooks for form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Clear any previous error message
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', {username, password});

      if (response.data.success) {
        // On success, navigate to the login page or home
        alert('Registration successful! Please log in.');
        navigate('/');  // Navigate to login page after successful registration
      } else {
        // Show error message returned from backend
        setErrorMessage(response.data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setErrorMessage('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="apply-container">
      <Stack alignItems="center" direction="row">
        <EmojiObjectsOutlinedIcon sx={{ fontSize: 100, color: colors.logoYellow }} />
        <h1 className="title">Bright Scholarship</h1>
      </Stack>
      <p style={{ color: colors.mainBrown, marginLeft: '16px', fontWeight: '700' }}>
        Please fill out the following registration information.
      </p>

      <div className="credentials application-box right">
        <h2 style={{ color: colors.mainBrown, marginTop: '0' }}>Create Login Credentials</h2>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="inputs">
            <label htmlFor="username" className="input-label">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="input-field" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="inputs">
            <label htmlFor="password" className="input-label">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="input-field" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="inputs">
            <label htmlFor="confirm-password" className="input-label">Confirm Password:</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              className="input-field" 
              placeholder="Re-enter your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          {/* Display error message if any */}
          {errorMessage && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            label="Register"
            variant="primary"
            style={{ fontWeight: 800, fontSize: "24px" }}
            class="button-container"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
