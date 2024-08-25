import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chats');
    setChats(data.chats);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats?.map((item, index) => (
        <p key={index}>{item.chatName}</p>
      ))}
    </div>
  );
}

export default Home;
