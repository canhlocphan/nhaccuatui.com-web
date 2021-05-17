// libs
import React from "react";

// components
import NavItem from "../NavItem";

// others
import "./styles.scss";

const Navigation = (props) => (
  <div className="navigation">
    <div className="f-title">{props.children}</div>
    <ul className="list-nav">
      {props.footer.map(({ id, title }) => (
        <NavItem id={id} title={title}></NavItem>
      ))}
    </ul>
  </div>
);

export default Navigation;
