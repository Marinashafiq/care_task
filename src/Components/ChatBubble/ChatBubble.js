import React from "react";
import { Button } from "../Controls/Button/Button";
import "./ChatBubble.css";

export const ChatBubble = () => {
  return (
    <div className="chat_message">
      <img
        src="https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70"
        className="user_profile"
      />
      <div className="message_container">
        <div className="chat_bubble">
          <h4>Chest Pain</h4>
          <p>FRI Oct 12 4:27 PM</p>
          <small>kbecker@gmail.com completed - THU Oct 11 3:29 PM</small>
          <Button content={"View History"} />
        </div>
        <div className="message_info">
            <small>me</small>
            <small>12:00a</small>
        </div>
      </div>
    </div>
  );
};
