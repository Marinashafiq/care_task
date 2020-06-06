import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Input } from "../Controls/Input/Input";
import "./ChatActionBar.css";

export const ChatActionBar = () => {
  return (
    <div className="chat_actions">
      <FontAwesomeIcon icon={faComment} size="2x" color="#5cafb5" />
      <Input type="text" placeholder="message" />
      <FontAwesomeIcon icon={faComment} size="2x" color="#5cafb5" />
    </div>
  );
};
