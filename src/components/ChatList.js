import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

function ChatList() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('/api/chats');
        setChats(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
