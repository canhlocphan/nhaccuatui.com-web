// libs
import React from "react";

// others
import "./styles.scss";

const Song = (props) => (
  <div className="bg-image">
    <img src={props.image} alt="bg-img"></img>
  </div>
);

export default Song;
