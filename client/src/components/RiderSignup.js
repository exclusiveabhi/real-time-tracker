import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RiderSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Implement signup logic here, for example, sending a request to your backend

    // After successful signup, navigate to the login page for riders
    navigate('/rider-login');
  };

  return (
    <div>
      <h2>Rider Signup</h2>
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

export default RiderSignup;
