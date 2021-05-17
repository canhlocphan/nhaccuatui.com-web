import React from "react";

import "./styles.scss";

const Topic = (props) => (
  <li className="topic" title={props.title}>
    <img src={props.image} alt={props.title}></img>
  </li>
);

export default Topic;
