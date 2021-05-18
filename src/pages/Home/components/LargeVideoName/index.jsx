// libs
import React from "react";
// others
import "./styles.scss";

const LargeVideoName = (props) => (
  <h3 className="large-video-name" title={props.title}>
    {props.songName}
  </h3>
);

export default LargeVideoName;
