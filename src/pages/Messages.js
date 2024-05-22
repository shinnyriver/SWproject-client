import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleReply = async (messageId, replyContent) => {
    try {
      await axios.post(`/messages/${messageId}/reply`, { content: replyContent });
      // 새로고침 또는 메시지 상태 업데이트
    } catch (error) {
      console.error('Failed to send reply', error);
    }
  };

  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`/messages/${messageId}`);
      setMessages(messages.filter(message => message.id !== messageId));
    } catch (error) {
      console.error('Failed to delete message', error);
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p><strong>From:</strong> {message.sender_username}</p>
            <p>{message.content}</p>
            <button onClick={() => handleReply(message.id, 'Your reply content')}>Reply</button>
            <button onClick={() => handleDelete(message.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
