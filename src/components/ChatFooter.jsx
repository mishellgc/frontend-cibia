import React, { useState } from 'react';
import '../styles/ChatFooter.css';

const ChatFooter = ({ handleSend }) => {
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Avoid sending empty messages
    handleSend(input);
    setInput('');
  }

  return (
    <div className="chat-footer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <input type="file" id="imageUpload" />
        <label htmlFor="imageUpload" className="image-upload">
          📎
        </label>
      </form>
    </div>
  );
};

export default ChatFooter;
