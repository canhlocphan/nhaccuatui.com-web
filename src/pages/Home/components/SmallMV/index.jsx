// libs
import React from "react";
// components
import SongInformation from "../SongInformation";
import BackgroundSmallMV from "../BackgroundSmallMV";
// others
import "./styles.scss";

const SmallMV = ({ songName, image, title, id }) => (
  <li className="small-mv">
    <BackgroundSmallMV songName={songName} image={image} id={id} />
    <SongInformation songName={songName} title={title} />
  </li>
);

export default SmallMV;
