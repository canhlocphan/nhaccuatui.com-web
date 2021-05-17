// libs
import React from "react";

// components
import NameSingerList from "../NameSingerList";
import SongName from "../SongName";

// others
import "./styles.scss";

const SongInformation = (props) => (
  <div className="info-song" title={props.title}>
    <SongName songName={props.songName}></SongName>
    <NameSingerList title={props.title}></NameSingerList>
  </div>
);

export default SongInformation;
