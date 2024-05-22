// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Flask 서버의 기본 URL
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
