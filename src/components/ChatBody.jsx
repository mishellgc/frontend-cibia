import React from 'react';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import '../styles/ChatBody.css';

const ChatBody = ({ messages }) => {
  return (
    <div className="chat-body">
      {messages.map((message, index) => {
        return message.sender === 'user' ? (
          <UserMessage key={index} text={message.text} />
        ) : (
          <BotMessage key={index} text={message.text} />
        );
      })}
    </div>
  );
};

export default ChatBody;
