import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { ChatContactItem } from "../../Components/ChatContactItem/ChatContactItem";
import { chatContactsList } from "../../utlis/shared";
import { Scrollbars } from "react-custom-scrollbars";
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
          <FontAwesomeIcon
            icon={faComment}
            className="icon_size"
            color="white"
          />
        </div>
        <div className="contact_list_container">
          <Scrollbars>
            {this.renderChatContactList(chatContactsList)}
          </Scrollbars>
        </div>
      </div>
    );
  }
}
