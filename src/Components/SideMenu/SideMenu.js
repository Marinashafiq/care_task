import React from "react";
import logo from "../../assets/images/logo.png";
import "./SideMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faComments,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export const SideMenu = () => {
  return (
    <div className="side_menu">
      <div className="logo_container">
        <img className="logo" src={logo} alt={"logo"} />
      </div>
      <ul className="side_menu_list">
        <li className="side_menu_item active">
          <FontAwesomeIcon icon={faComments} size="2x" color="white" />
        </li>
        <li className="side_menu_item">
          <FontAwesomeIcon icon={faUser} size="2x" color="white" />
        </li>
        <li className="side_menu_item">
          <FontAwesomeIcon icon={faCog} size="2x" color="white" />
        </li>
        <li className="side_menu_item">
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" color="white" />
        </li>
      </ul>
    </div>
  );
};
