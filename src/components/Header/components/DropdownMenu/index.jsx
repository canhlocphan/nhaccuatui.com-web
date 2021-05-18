// libs
import React from "react";
// components
import Menu from "../Menu";
// others
import "./styles.scss";

const DropdownMenu = ({ list }) => (
  <ul className="dropdown-menu">
    {list.map(({ id, type, specific }) => (
      <Menu id={id} type={type} specific={specific}></Menu>
    ))}
  </ul>
);
export default DropdownMenu;
