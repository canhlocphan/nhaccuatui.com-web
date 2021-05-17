// libs
import React from "react";

// others
import "./styles.scss";

const CooperationItem = (props) => (
  <li className="footer-cooperation-item">
    <img src={props.image} alt="cooperation"></img>
  </li>
);

export default CooperationItem;
