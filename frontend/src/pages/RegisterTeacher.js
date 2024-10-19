// src/pages/RegisterTeacher.js

import React, { useState } from 'react';
import api from '../api';

const RegisterTeacher = () => {
  const [tname, setTname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');

  const registerTeacher = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register/teacher', { tname, email, password, subject });
      alert('Teacher registered successfully');
      // Redirect to login or dashboard
      window.location.href = '/login';
    } catch (err) {
      alert('Error in registration');
    }
  };

  return (
    <div>
      <h2>Register Teacher</h2>
      <form onSubmit={registerTeacher}>
        <input type="text" placeholder="Name" value={tname} onChange={(e) => setTname(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterTeacher;
