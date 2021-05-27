// libs
import React from "react";

// components
import SongInformation from "../SongInformation";
import BackgroundSong from "../BackgroundSong";

// others
import "./styles.scss";

const Song = ({ image, songName, title }) => (
  <div className="song">
    <BackgroundSong image={image}></BackgroundSong>
    <SongInformation songName={songName} title={title}></SongInformation>
  </div>
);

export default Song;
