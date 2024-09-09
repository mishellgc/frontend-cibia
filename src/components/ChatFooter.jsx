import React, { useState } from 'react';
import '../styles/ChatFooter.css';
import axios from "axios";

const ChatFooter = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input); // Llama a la función onSend que se pasa como prop
      setInput('');

      // Enviar el mensaje al backend Flask
      try {
        const response = await axios.post("/api/chat", {
          message: input,
        });

        // Agregar la respuesta del asistente al chat
        onSend(response.data.response); // Añade la respuesta del bot al chat
        //onSend({ sender: 'bot', text: response.data.response });
      } catch (error) {
        console.error("Error al comunicarse con el backend:", error);
        onSend("Error al comunicarse con el asistente."); // Mensaje de error
        //onSend({ sender: 'bot', text: 'Error al comunicarse con el asistente.' });
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onSend(`Imagen adjunta: ${file.name}`);
    }
  };

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
        <input type="file" id="imageUpload" onChange={handleImageUpload} />
        <label htmlFor="imageUpload" className="image-upload">
          📎
        </label>
      </form>
    </div>
  );
};

export default ChatFooter;
