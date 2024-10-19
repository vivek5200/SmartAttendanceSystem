// src/pages/Login.js

import React, { useState } from 'react';
import api from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      // Redirect based on role
      window.location.href = response.data.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard';
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;