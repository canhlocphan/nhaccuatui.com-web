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
    <ViewMV view={props.view} />
    <TimeVideo time={props.time} />
    <BackgroundVideo image={props.image} />
    <LargeVideoInformation songName={props.songName} title={props.title} />
  </div>
);

export default VideoLarge;
