import React from 'react';
import '../styles/BotMessage.css'; // Asegúrate de crear este archivo CSS para estilizar

const BotMessage = ({ text }) => {
  return (
    <div className="bot-message">
      <div className="message-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BotMessage;
