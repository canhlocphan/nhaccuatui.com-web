// libs
import React from "react";

// others
import "./styles.scss";

const SmallBoxAbsolute = (props) => (
  <div className="small-box-absolute">
    <div className="box">
      <div className="overlay"></div>
      <div className="view-mv">
        <div className="icon-view"></div>
        <div className="view">{props.view}</div>
      </div>
      <div className="bg-video">
        <div className="icon-play"></div>
        <img className="image" src={props.image} alt="video"></img>
      </div>
    </div>
    <div className="view-time">{props.time}</div>
  </div>
);

export default SmallBoxAbsolute;
