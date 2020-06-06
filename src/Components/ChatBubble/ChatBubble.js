import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faHistory } from "@fortawesome/free-solid-svg-icons";

import "./ChatBubble.css";

export const ChatBubble = ({ chatMessage }) => {
  const renderHistory = () => {
    return (
      <>
        {chatMessage.reminder_info ? (
          <div className="reminder_actions_info">
            <div className="spacing">
              <p>
                <em>{chatMessage.reminder_info.name}</em>
              </p>
              <small>
                <em>{chatMessage.reminder_info.date}</em>
              </small>
            </div>
            <img
              src={chatMessage.reminder_info.image_url}
              className="user_profile"
              alt="profile"
            />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faHistory} color="#5cafb5" />
            <span className="spacing">{chatMessage.action}</span>
          </div>
        )}
      </>
    );
  };

  const renderReminderStatus = (status) => {
    return (
      <>
        {status === "Done" ? (
          <div className="status_container">
            <FontAwesomeIcon icon={faCheck} color="#e88282" />
            <span className="spacing">{status}</span>
          </div>
        ) : (
          <div>
            <span>
              &#128549; <strong className="danger_color">{status}</strong>
            </span>
          </div>
        )}
      </>
    );
  };

  const renderReminderBubble = () => {
    return (
      <>
        <h5>{chatMessage.reminder_title}</h5>
        {chatMessage.reminder_list.map((item, index) => {
          return (
            <div key={index} className="reminder_item">
              <FontAwesomeIcon
                icon={item.type === 1 ? faClock : faListAlt}
                color="#546566"
              />
              <span className="reminder_content">
                <p>{item.title}</p>
                <small>{item.content}</small>
              </span>
            </div>
          );
        })}
        <div className="reminder_actions">
          {renderReminderStatus(chatMessage.status)}
          {renderHistory()}
        </div>
      </>
    );
  };

  return (
    <div className={`chat_message ${chatMessage.isSender && "sender"}`}>
      {chatMessage.isSender === false && (
        <img
          src={chatMessage.image_url}
          className="user_profile"
          alt="profile"
        />
      )}
      <div className="message_container">
        <div className="chat_bubble">
          {chatMessage.is_reminder
            ? renderReminderBubble()
            : chatMessage.message}
        </div>
        <div className="message_info">
          <small>{chatMessage.name}</small>
          <small>{chatMessage.time}</small>
        </div>
      </div>
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
