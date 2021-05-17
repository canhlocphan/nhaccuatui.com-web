// libs
import React from "react";

// components
import NameSingerList from "../NameSingerList";
import LargeVideoName from "../LargeVideoName";

// others
import "./styles.scss";

const LargeVideoInformation = (props) => (
  <div className="name-video-large">
    <LargeVideoName songName={props.songName} title={props.title}></LargeVideoName>
    <NameSingerList title={props.title}></NameSingerList>
  </div>
);

export default LargeVideoInformation;
