// libs
import React from "react";
// others
import "./styles.scss";

const LargeVideoName = ({ title, songName }) => (
  <h3 className="large-video-name" title={title}>
    {songName}
  </h3>
);

export default LargeVideoName;
