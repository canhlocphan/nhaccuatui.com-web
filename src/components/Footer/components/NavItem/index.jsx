// libs
import React from "react";

// others
import "./styles.scss";

const NavItem = (props) => (
  <li className="nav-item" title={props.title}>
    <span className="nav-item-left">&gt;</span>
    {props.title}
  </li>
);

export default NavItem;
