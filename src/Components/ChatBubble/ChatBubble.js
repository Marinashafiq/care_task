import React from "react";
import { Button } from "../Controls/Button/Button";
import "./ChatBubble.css";

export const ChatBubble = ({ chatMessage }) => {
  return (
    <div className={`chat_message ${chatMessage.isSender && 'sender'}`}>
      {chatMessage.isSender === false && (
        <img src={chatMessage.image_url} className="user_profile" />
      )}
      <div className="message_container">
        <div className="chat_bubble">{chatMessage.message}</div>
        <div className="message_info">
          <small>{chatMessage.name}</small>
          <small>{chatMessage.time}</small>
        </div>
      </div>
      {chatMessage.isSender && (
        <img src={chatMessage.image_url} className="user_profile" />
      )}
    </div>
  );
};
