// libs
import React from "react";

// components
import SongInformation from "../SongInformation";
import BackgroundSong from "../BackgroundSong";

// others
import "./styles.scss";

const Song = (props) => (
  <div className="song">
    <BackgroundSong image={props.image}></BackgroundSong>
    <SongInformation songName={props.songName} title={props.title}></SongInformation>
  </div>
);

export default Song;
