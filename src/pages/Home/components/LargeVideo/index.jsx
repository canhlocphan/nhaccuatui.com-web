// libs
import React from "react";
// components
import LargeBoxAbsolute from "../LargeBoxAbsolute";
// others
import "./styles.scss";

const LargeVideo = (props) => (
  <li className="video-large" key={props.id}>
    <LargeBoxAbsolute
      songName={props.songName}
      id={props.id}
      title={props.title}
      image={props.image}
      view={props.view}
      time={props.time}
    />
  </li>
);

export default LargeVideo;
