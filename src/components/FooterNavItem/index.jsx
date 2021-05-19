// libs
import React from "react";
// others
import "./styles.scss";

const FooterNavItem = ({ title }) => (
  <li className="nav-item" title={title}>
    <span className="nav-item-left">&gt;</span>
    {title}
  </li>
);

export default FooterNavItem;
