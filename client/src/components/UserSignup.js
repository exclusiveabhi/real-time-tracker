// client/src/components/UserSignup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to home page after successful signup
        navigate('/');
      } else {
        // Handle error response
        console.error('Failed to signup:', response.statusText);
        alert('Failed to signup. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again later.');
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default UserSignup;
