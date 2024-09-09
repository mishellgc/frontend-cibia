import React, { useState } from "react";
import { fetchReply } from "./api/cibia";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // Controlar si el chat está abierto o minimizado
  const [isMaximized, setIsMaximized] = useState(false); // Controlar si el chat está maximizado

  // Manejar el envío de mensajes
  const handleSend = async (input) => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    console.log(messages.length);
    var iaMessages = await fetchReply(input);
    for (var i = messages.length + 1; i < iaMessages.length; i++) {
      console.log(i); // is the index
      console.log(iaMessages[i].content[0].text.value); // is the item
      const iaMsg = iaMessages[i].content[0].text.value;
      setMessages(messages => [...messages, { role: 'assistant', content: iaMsg }]);
    }
  };

  // Minimizar o expandir el chat
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Maximizar o restaurar el chat
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // Cerrar el chat (opcional)
  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className={`App ${isMaximized ? 'maximized' : ''}`}>
      <div className={`chat-container ${isOpen ? "open" : "minimized"} ${isMaximized ? 'full-screen' : ''}`}>
        <ChatHeader toggleOpen={toggleOpen} toggleMaximize={toggleMaximize} closeChat={closeChat} />
        {isOpen && <ChatBody messages={messages} />}
        {isOpen && <ChatFooter handleSend={handleSend} />}
      </div>
    </div>
  );
}

export default App;
