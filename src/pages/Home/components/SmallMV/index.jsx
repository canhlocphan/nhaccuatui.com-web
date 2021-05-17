// libs
import React from "react";

// components
import SongInformation from "../SongInformation";
import BackgroundSmallMV from "../BackgroundSmallMV";

// others
import "./styles.scss";

const SmallMV = (props) => (
  <li className="small-mv">
    <BackgroundSmallMV songName={props.songName} image={props.image}></BackgroundSmallMV>
    <SongInformation songName={props.songName} title={props.title}></SongInformation>
  </li>
);

export default SmallMV;
