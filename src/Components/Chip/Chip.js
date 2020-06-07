import React from "react";
import "./Chip.scss";
// General component for notifications number chip
export const Chip = ({ content }) => {
  return (
    <div className="chip_container">
      <p className="text_white">{content}</p>
    </div>
  );
};
