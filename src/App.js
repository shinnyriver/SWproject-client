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
import Users from './pages/Users';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/chats/:chatId" element={<PrivateRoute element={<Chat />} />} />
          <Route path="/chats" element={<PrivateRoute element={<ChatList />} />} />
          <Route path="/photos" element={<PrivateRoute element={<Photos />} />} />
          <Route path="/messages" element={<PrivateRoute element={<Messages />} />} />
          <Route path="/users" element={<PrivateRoute element={<Users />} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
