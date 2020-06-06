import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { ChatActionBar } from "../../Components/ChatActionBar/ChatActionBar";
import { ChatBubble } from "../../Components/ChatBubble/ChatBubble";
import "./ChatContainer.css";
export default class ChatContainer extends Component {
  render() {
    return (
      <div className="chat_container">
        <div className="chat_container_header">
          <h3 className="text_white">Mom’s Discharge Plan</h3>
          <div>
            <FontAwesomeIcon icon={faComment} size="2x" color="white" />
            <FontAwesomeIcon icon={faComment} size="2x" color="white" />
            <FontAwesomeIcon icon={faComment} size="2x" color="white" />
          </div>
        </div>
        <div className="chat_messaging_container">
            <ChatBubble />
        </div>
        <ChatActionBar />
      </div>
    );
  }
}
