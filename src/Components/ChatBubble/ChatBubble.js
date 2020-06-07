import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faHistory } from "@fortawesome/free-solid-svg-icons";
import "./ChatBubble.scss";
// Each chat bubble for sender & receiver with different kinds of bubbles type
export const ChatBubble = ({ chatMessageContent }) => {
  const renderHistory = () => {
    return (
      <>
        {chatMessageContent.reminder_info ? (
          <div className="reminder_actions_info">
            <div className="spacing">
              <p>
                <em>{chatMessageContent.reminder_info.name}</em>
              </p>
              <small>
                <em>{chatMessageContent.reminder_info.date}</em>
              </small>
            </div>
            <img
              src={chatMessageContent.reminder_info.image_url}
              className="user_profile"
              alt="profile"
            />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faHistory} color="#5cafb5" />
            <span className="spacing">{chatMessageContent.action}</span>
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
        <h5>{chatMessageContent.reminder_title}</h5>
        {chatMessageContent.reminder_list.map((item, index) => {
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
          {renderReminderStatus(chatMessageContent.status)}
          {renderHistory()}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="message_container">
        <div className="chat_bubble">
          {/* show remider bubble or just simple chat bubble */}
          {chatMessageContent.is_reminder
            ? renderReminderBubble()
            : chatMessageContent.message}
        </div>
        <div className="message_info">
          <small>{chatMessageContent.name}</small>
          <small>{chatMessageContent.time}</small>
        </div>
      </div>
    </>
  );
};
