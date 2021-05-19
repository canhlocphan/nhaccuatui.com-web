// libs
import React from "react";
// others
import "./styles.scss";

const Topic = ({ image, title }) => (
  <li className="topic" title={title}>
    <img src={image} alt={title}></img>
  </li>
);

export default Topic;
