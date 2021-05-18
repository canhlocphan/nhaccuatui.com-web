// libs
import React from "react";
// others
import "./styles.scss";

const MenuItem = ({ type, specific }) => (
  <ul className="menu-item">
    <li className="title-menu-item">{type}</li>
    {specific.map(({ id, name }) => (
      <li key={id} className="content-menu-list">
        {name}
      </li>
    ))}
  </ul>
);
export default MenuItem;
