// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

function Chat({ match }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const chatId = match.params.chatId;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chats/${chatId}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [chatId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/chats/${chatId}/messages`, { message });
      setMessage('');
      const response = await axios.get(`/api/chats/${chatId}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>{msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
