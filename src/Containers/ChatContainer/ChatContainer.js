import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSearch,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { ChatActionBar } from "../../Components/ChatActionBar/ChatActionBar";
import { ChatBubble } from "../../Components/ChatBubble/ChatBubble";
import { IconButton } from "../../Components/Controls/IconButton/IconButton";
import { chatMessages } from "../../utlis/shared";
import "./ChatContainer.css";
export default class ChatContainer extends Component {
  renderMessages = () => {
    return chatMessages.map((message, index) => {
      return <ChatBubble key={index} chatMessage={message} />;
    });
  };

  render() {
    return (
      <div className="chat_container">
        <div className="chat_container_header">
          <h3 className="text_white">Mom’s Discharge Plan</h3>
          <div>
            <IconButton
              icon={<FontAwesomeIcon icon={faUserFriends} color="white" />}
            />
            <IconButton
              classes="spacing_icons"
              icon={<FontAwesomeIcon icon={faFilter} color="white" />}
            />
            <IconButton
              icon={<FontAwesomeIcon icon={faSearch} color="white" />}
            />
          </div>
        </div>
        <div className="chat_messaging_container">
          <div className="chat_start_heading">
            <strong>Starter Care Plan created + daily actions added</strong>
            <small className="spacing">12:10p</small>
          </div>
          {/* <ChatBubble /> */}
          {this.renderMessages()}
        </div>
        <ChatActionBar />
      </div>
    );
  }
}
