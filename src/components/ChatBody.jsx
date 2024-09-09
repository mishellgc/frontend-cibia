import React from 'react';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import '../styles/ChatBody.css';

const ChatBody = ({ messages }) => {
  return (
    <div className="chat-body">
      {messages.map((message, index) => {
        return message.role === 'user' ? (
          <UserMessage key={index} text={message.content} />
        ) : (
          <BotMessage key={index} text={message.content} />
        );
      })}
    </div>
  );
};

export default ChatBody;
