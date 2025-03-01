import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!token) {
    return null; // 로그인되지 않은 상태에서는 네비게이션 바를 숨김
  }

  return (
    <nav className="nav-bar">
      <NavLink to="/photos" className={({ isActive }) => (isActive ? 'active-link' : '')}>Photos</NavLink>
      <NavLink to="/messages" className={({ isActive }) => (isActive ? 'active-link' : '')}>Messages</NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>Profile</NavLink>
      <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>Users</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default NavBar;
