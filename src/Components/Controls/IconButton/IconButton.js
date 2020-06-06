import React from "react";
import './IconButton.css';

export const IconButton = ({ icon , classes }) => {
  return (
    <button className={`icon_btn ${classes}`}>
      {icon}
    </button>
  );
};
