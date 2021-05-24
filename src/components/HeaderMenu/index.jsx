// libs
import React from "react";
// components
import HeaderMenuItem from "../HeaderMenuItem";
// others
import "./styles.scss";

const Menu = ({ id, type, specific }) => (
  <li className="menu-wrapper" key={id}>
    <HeaderMenuItem type={type} specific={specific}></HeaderMenuItem>
  </li>
);
export default Menu;
