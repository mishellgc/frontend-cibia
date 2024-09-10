import React, { useState, useEffect } from "react";
import { fetchReply } from "./api/cibia";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import './styles/App.css';
import 'react-chat-widget/lib/styles.css';
import logo from './assets/cibia_left.png';
import background from './assets/background.png';
import CloseIcon from '@mui/icons-material/Close'; // Icono de cerrar

function App() {
  useEffect(() => {
    addResponseMessage('Hola Juan, soy Cibia, tu asistente virtual del BBVA. ¿En qué puedo asistirte hoy?');
  }, []);

  const [isTyping, setIsTyping] = useState(false);

  const handleNewUserMessage = async (messages) => {
    console.log(`New message incoming! ${messages}`);
    // Show typing indicator while waiting for the API response
    toggleMsgLoader();
    setIsTyping(true);
    
    try {
      // Simulate an API call (replace with your actual API request)
      const response = await handleSend(messages);
      
      // Hide typing indicator after getting the response
      toggleMsgLoader();
      setIsTyping(false);
      
    } catch (error) {
      console.error('Error fetching API response:', error);
      toggleMsgLoader();  // Hide typing loader even if an error occurs
      setIsTyping(false);
    }
  };

  const myStyle = {
    backgroundImage: background,
};

  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Controlar si el chat está abierto o minimizado
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
      addResponseMessage(iaMessages[i].content[0].text.value);
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
    handleToggle()
    

  };

  const handleToggle = () => {
    const element = document.querySelector("#root > div > div > button")
    if (element.style.visibility === "hidden") {
        element.click();  
        element.style.visibility = "visible"; // Show element
    } else {
        element.style.visibility = "hidden";  // Hide element
    }
  }

  return (
    <div style={myStyle} className={`App ${isMaximized ? 'maximized' : ''}`}>
      <Widget
          handleNewUserMessage={handleNewUserMessage}
          senderPlaceHolder="Escribe tu mensaje..."
          title={<ChatHeader toggleOpen={toggleOpen} toggleMaximize={toggleMaximize} closeChat={closeChat} />}
          profileAvatar={logo}
          launcherOpenImg={logo}
          launcherCloseImg="https://img.icons8.com/?size=100&id=3QmmTwcR4c2b&format=png&color=FFFFFF"
          showAttachFileButton={true}
          emojis={false}
          handleToggle={handleToggle}
          showCloseButton={true}
      />
    </div>
  );
}

export default App;
