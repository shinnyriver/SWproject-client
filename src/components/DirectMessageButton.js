import React, { useState } from 'react';
import axios from '../axiosConfig';

function DirectMessageButton({ recipientId }) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendMessage = async () => {
    try {
      await axios.post('/messages/send', {
        receiver_id: recipientId,
        content: message
      });
      setMessage('');
      setStatus('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message', error);
      setStatus('Failed to send message');
    }
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message"
      />
      <button onClick={handleSendMessage}>Send Message</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default DirectMessageButton;
