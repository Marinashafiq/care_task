import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../Controls/Input/Input";
import { IconButton } from "../Controls/IconButton/IconButton";
import "./ChatActionBar.css";

export const ChatActionBar = () => {
  return (
    <div className="chat_actions">
      <IconButton
        icon={<FontAwesomeIcon icon={faPlusCircle} color="#5cafb5" />}
      />
      <Input type="text" placeholder="message" />
      <IconButton
        icon={<FontAwesomeIcon icon={faPaperPlane} color="#5cafb5" />}
      />
    </div>
  );
};
