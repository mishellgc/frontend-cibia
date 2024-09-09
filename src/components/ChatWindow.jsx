import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  // Función para agregar mensajes
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className={`chat-window ${isOpen ? 'open' : 'minimized'}`}>
      <ChatHeader toggleOpen={toggleOpen} closeChat={closeChat} />
      {isOpen && <ChatBody messages={messages} />}
      {isOpen && <ChatFooter addMessage={addMessage} />} {/* Pasar addMessage aquí */}
    </div>
  );
};

export default ChatWindow;
