// libs
import React from "react";
// components
import MenuItem from "../MenuItem";
// others
import "./styles.scss";

const Menu = ({ id, type, specific }) => (
  <li className="menu-wrapper" key={id}>
    <MenuItem type={type} specific={specific}></MenuItem>
  </li>
);
export default Menu;
