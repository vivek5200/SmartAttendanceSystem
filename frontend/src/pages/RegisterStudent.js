// src/pages/RegisterStudent.js

import React, { useState } from 'react';
import api from '../api';

const RegisterStudent = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const registerStudent = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register/student', { fname, lname, email, password, phone });
      alert('Student registered successfully');
      // Redirect to login or dashboard
      window.location.href = '/login';
    } catch (err) {
      alert('Error in registration');
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={registerStudent}>
        <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;
