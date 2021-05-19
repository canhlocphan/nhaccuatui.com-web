// libs
import React from "react";

// components
import BackgroundVideo from "../BackgroundVideo";

// others
import "./styles.scss";

const BackgroundSmallMV = (props) => (
  <div className="small-mv-bg" title={props.songName}>
    <div className="overlay"></div>
    <BackgroundVideo image={props.image} songName={props.songName}></BackgroundVideo>
  </div>
);

export default BackgroundSmallMV;
