import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');

    if (userId) {
      config.headers['X-User-ID'] = userId;
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors and auth issues
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized access
    if (error.response?.status === 401) {
      localStorage.removeItem('userId');
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }

    // Handle forbidden access
    if (error.response?.status === 403) {
      console.warn('Access forbidden');
    }

    // Handle server errors
    if (error.response?.status >= 500) {
      console.error('Server error:', error.response.status);
    }

    return Promise.reject(error);
  }
);

export default api;

