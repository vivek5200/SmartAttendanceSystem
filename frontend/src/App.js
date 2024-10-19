// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RegisterStudent from './pages/RegisterStudent';
import RegisterTeacher from './pages/RegisterTeacher';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/teacher" element={<RegisterTeacher />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
