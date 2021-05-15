// libs
import React from "react";

// others
import "./styles.scss";

const BoxAbsolute = (props) => (
  <div className="bg-video">
    <div className="icon-play"></div>
    <img className="image" src={props.image} alt="video"></img>
  </div>
);

export default BoxAbsolute;
