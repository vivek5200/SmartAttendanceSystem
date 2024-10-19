// src/pages/StudentDashboard.js

import React, { useEffect, useState } from 'react';
import api from '../api';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/students/me', {
          headers: { 'x-auth-token': token },
        });
        setStudentData(response.data);
      } catch (err) {
        console.error('Error fetching student data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome, {studentData.fname} {studentData.lname}</h2>
      <h3>Your Performance Score: {studentData.performance_score}</h3>
      {/* Other student-related features */}
    </div>
  );
};

export default StudentDashboard;
