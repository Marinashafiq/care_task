import React from "react";
import './IconButton.scss';

export const IconButton = ({ icon , classes }) => {
  return (
    <button className={`icon_btn ${classes}`}>
      {icon}
    </button>
  );
};
