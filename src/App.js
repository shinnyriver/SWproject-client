// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import Photos from './pages/Photos';
import Messages from './pages/Messages';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats/:chatId" element={<Chat />} />
          <Route path="/chats" element={<ChatList />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar /> {/* 네비게이션 바 추가 */}
      </div>
    </Router>
  );
}

export default App;
