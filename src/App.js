import React, { useState, useEffect } from "react";
import { fetchReply } from "./api/cibia";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import { Widget, addResponseMessage, toggleMsgLoader, dropMessages } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './styles/App.css';
import logo from './assets/cibia_left.png';
import background from './assets/background.png';
import CloseIcon from '@mui/icons-material/Close'; // Icono de cerrar
import axios from 'axios';

function App() {

  const [isTyping, setIsTyping] = useState(false);

  const handleNewUserMessage = async (message) => {
    console.log(`New message incoming! ${message}`);
    // Show typing indicator while waiting for the API response
    toggleMsgLoader();
    setIsTyping(true);
    
    try {
      // Simulate an API call (replace with your actual API request)
      const response = await axios.post('http://127.0.0.1:5000/api/consult', {pregunta: message})
      addResponseMessage(response.data.respuesta);
      
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
  const [isOpen, setIsOpen] = useState(false); // Controlar si el chat está abierto o minimizado
  const [isMaximized, setIsMaximized] = useState(false); // Controlar si el chat está maximizado

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
    handleToggle();
  };

  const handleToggle = async (event) => {
    const btnLogo = document.querySelector("#root > div > div > button")
    if (btnLogo){
      if (btnLogo.style.visibility === "hidden") {
        dropMessages();
        btnLogo.style.visibility = "visible"; // Show element
      } else {
        var message = "Hola soy RAMON LOPEZ TORRES con DNI 64672316 representante de la empresa TRANSPORTES UNIDOS SA con RUC 20100015555. Saludame presentandote"
        const response = await axios.post('http://127.0.0.1:5000/api/consult', {pregunta: message});
        addResponseMessage(response.data.respuesta);
        btnLogo.style.visibility = "hidden";  // Hide element
      }
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
          fullScreenMode={isMaximized}
          launcherCloseImg="https://img.icons8.com/?size=100&id=3QmmTwcR4c2b&format=png&color=FFFFFF"
          isShowFileUploader={true}
          emojis={false}
          handleToggle={handleToggle}
          showCloseButton={false}
      />
    </div>
  );
}

export default App;
