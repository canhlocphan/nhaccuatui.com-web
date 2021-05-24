// libs
import React from "react";
// components
import FooterNavItem from "../FooterNavItem";
// others
import "./styles.scss";

const FooterNavigationTitle = ({ footer, nameTitle }) => (
  <div className="navigation">
    <div className="f-title">{nameTitle}</div>
    <ul className="list-nav">
      {footer.map(({ id, title }) => (
        <FooterNavItem key={id} id={id} title={title} />
      ))}
    </ul>
  </div>
);

export default FooterNavigationTitle;
