// libs
import React from "react";

// others
import "./styles.scss";

const Album = (props) => (
  <div className="album">
    <div className="action-info">
      <div className="view-listening">
        <div className="icon-listening"></div>
        <div>{props.view}</div>
      </div>
      <div className="icon-play"></div>
    </div>
    <img className="avatar" src={props.image} alt="avatar"></img>
  </div>
);

export default Album;
