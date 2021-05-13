// libs
import React from "react";

// components
import NameSingerList from "../NameSingerList";

// others
import "./styles.scss";

const VideoLarge = (props) => (
  <div className="large-box-absolute">
    <div className="view-mv">
      <div className="icon-view"></div>
      <div className="view">{props.view}</div>
    </div>
    <div className="view-time">{props.time}</div>
    <div className="bg-video" title={props.title}>
      <div className="icon-play"></div>
      <img className="image" src={props.image} alt="video"></img>
    </div>
    <div className="name-video-large">
      <h3 className="name-song" title={props.title}>
        {props.nameSong}
      </h3>
      <NameSingerList title={props.title}></NameSingerList>
    </div>
  </div>
);

export default VideoLarge;
