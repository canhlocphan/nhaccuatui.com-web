// libs
import React from "react";

// components
import BackgroundVideo from "../BackgroundVideo";
import LargeVideoInformation from "../LargeVideoInformation";

// others
import "./styles.scss";

const MV = (props) => (
  <li className="mv-container">
    <div className="mv">
      <div className="overlay"></div>
      <BackgroundVideo image={props.image}></BackgroundVideo>
      <LargeVideoInformation songName={props.songName} title={props.title}></LargeVideoInformation>
    </div>
  </li>
);

export default MV;
