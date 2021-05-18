// libs
import React from "react";
// components
import SongInformation from "../SongInformation";
import MusicRank from "../MusicRank";
import MusicFirstRank from "../MusicFirstRank";
// others
import "./styles.scss";

const Music = ({ id, title, image, songName }) => (
  <li className="music" title={title}>
    {id === "1" ? <MusicFirstRank id={id} image={image} /> : <MusicRank id={id}></MusicRank>}
    <SongInformation songName={songName} title={title} />
  </li>
);

export default Music;
