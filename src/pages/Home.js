// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const token = localStorage.getItem('token');

  return (
    <div>
      <h1>Welcome to SW Project</h1>
      {token ? (
        <div>
          <p>You are logged in!</p>
          <Link to="/profile">Go to Profile</Link>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
