import React from "react";
import { ChatBubble } from "../ChatBubble/ChatBubble";

export const ChatMessage = ({chatMessage}) => {
  return (
    <div className={`chat_message ${chatMessage.isSender && "sender"}`}>
      {chatMessage.isSender === false && (
        <img
          src={chatMessage.image_url}
          className="user_profile"
          alt="profile"
        />
      )}
      <ChatBubble chatMessageContent={chatMessage} />
      {chatMessage.isSender && (
        <img
          src={chatMessage.image_url}
          className="user_profile"
          alt="profile"
        />
      )}
    </div>
  );
};
