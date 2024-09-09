import React from 'react';
import '../styles/UserMessage.css'; // Asegúrate de crear este archivo CSS para estilizar

const UserMessage = ({ text }) => {
  return (
    <div className="user-message">
      <div className="message-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserMessage;
