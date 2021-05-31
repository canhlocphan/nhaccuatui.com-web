// libs
import React from "react";
// components
import NameSingerList from "../NameSingerList";
import LargeVideoName from "../LargeVideoName";
// others
import "./styles.scss";

const LargeVideoInformation = ({ songName, title }) => (
  <div className="name-video-large">
    <LargeVideoName songName={songName} title={title} />
    <NameSingerList title={title} />
  </div>
);

export default LargeVideoInformation;
