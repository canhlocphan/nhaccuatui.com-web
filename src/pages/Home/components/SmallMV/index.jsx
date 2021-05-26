// libs
import React from "react";
// components
import SongInformation from "../SongInformation";
import BackgroundSmallMV from "../BackgroundSmallMV";
// others
import "./styles.scss";

const SmallMV = ({ songName, image, title }) => (
  <li className="small-mv">
    <BackgroundSmallMV songName={songName} image={image}></BackgroundSmallMV>
    <SongInformation songName={songName} title={title}></SongInformation>
  </li>
);

export default SmallMV;
