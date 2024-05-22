// src/pages/Messages.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';

function Messages() {
  return (
    <div>
      <ChatList />
      <Routes>
        <Route path="/chats/:chatId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default Messages;
