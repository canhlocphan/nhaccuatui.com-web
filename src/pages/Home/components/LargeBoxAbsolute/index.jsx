// libs
import React from "react";

// components
import ViewMV from "../ViewMV";
import TimeVideo from "../TimeVideo";
import BackgroundVideo from "../BackgroundVideo";
import LargeVideoInformation from "../LargeVideoInformation";

// others
import "./styles.scss";

const VideoLarge = (props) => (
  <div className="large-box-absolute">
    <div className="overlay"></div>
    <ViewMV view={props.view}></ViewMV>
    <TimeVideo time={props.time}></TimeVideo>
    <BackgroundVideo image={props.image}></BackgroundVideo>
    <LargeVideoInformation songName={props.songName} title={props.title}></LargeVideoInformation>
  </div>
);

export default VideoLarge;
