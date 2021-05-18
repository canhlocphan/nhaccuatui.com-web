// libs
import React from "react";
// components
import HeaderMenu from "../HeaderMenu";
// others
import "./styles.scss";

const HeaderDropdownMenu = ({ list }) => (
  <ul className="dropdown-menu">
    {list.map(({ id, type, specific }) => (
      <HeaderMenu key={id} id={id} type={type} specific={specific}></HeaderMenu>
    ))}
  </ul>
);
export default HeaderDropdownMenu;
