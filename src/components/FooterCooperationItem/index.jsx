// libs
import React from "react";
// others
import "./styles.scss";

const FooterCooperationItem = ({ id, image }) => (
  <li className="footer-cooperation-item" key={id}>
    <img src={image} alt="cooperation"></img>
  </li>
);

export default FooterCooperationItem;
