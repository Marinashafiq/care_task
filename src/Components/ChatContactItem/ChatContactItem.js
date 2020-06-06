import React from "react";
import "./ChatContactItem.css";
import { Chip } from "../Chip/Chip";

export const ChatContactItem = ({ chatContactData }) => {
  return (
    <div className="contact_list_item">
      <div className="contact_item_data">
        <img
          alt={"user profile"}
          className="user_profile"
          src={chatContactData.image_url}
        />
        <div className="contact_data_left">
          <h4>{chatContactData.name}</h4>
          {chatContactData.is_group && (
            <em><h5>{chatContactData.sub_sender_name}</h5></em>
          )}
          <small className="message_limit">{chatContactData.message}</small>
        </div>
      </div>
      <div>
          <small>{chatContactData.date}</small>
          {chatContactData.notification_number > 0 && <Chip content={chatContactData.notification_number}/>}
      </div>
    </div>
  );
};
