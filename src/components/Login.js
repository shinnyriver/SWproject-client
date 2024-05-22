import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', {
        username,
        password,
      });
      console.log('Login response:', response);
      if (response && response.data && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        setMessage('Login successful');
        navigate('/photos'); // 로그인 성공 후 photos 화면으로 이동
      } else {
        setMessage('Login failed: Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response ? error.response.data.msg : 'Login failed';
      setMessage(errorMessage);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
