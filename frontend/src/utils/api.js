import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update if using a different port or path
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export default api;
