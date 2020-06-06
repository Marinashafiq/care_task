import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { ChatContactItem } from "../../Components/ChatContactItem/ChatContactItem";
import { chatContactsList } from "../../utlis/shared";
import "./ChatContactsList.css";
export default class ChatContactsList extends Component {
  renderChatContactList = (chatListArr) => {
    return chatListArr.map((item, index) => {
      return <ChatContactItem key={index} chatContactData={item} />;
    });
  };

  render() {
    return (
      <div className="contact_list">
        <div className="contacts_list_header">
          <h3 className="text_white">Conversations</h3>
          <FontAwesomeIcon icon={faComment} size="2x" color="white" />
        </div>
        {this.renderChatContactList(chatContactsList)}
      </div>
    );
  }
}
