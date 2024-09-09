import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola, soy CIBIA. ¿Cómo puedo ayudarte hoy?" },
  ]);

  const [isOpen, setIsOpen] = useState(true); // Controlar si el chat está abierto o minimizado
  const [isMaximized, setIsMaximized] = useState(false); // Controlar si el chat está maximizado

  // Manejar el envío de mensajes
  const handleSend = (input) => {
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Simulación de la respuesta del bot
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: `Respuesta a: "${input}"` },
      ]);
    }, 1000);
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
        {isOpen && <ChatFooter onSend={handleSend} />}
      </div>
    </div>
  );
}

export default App;
