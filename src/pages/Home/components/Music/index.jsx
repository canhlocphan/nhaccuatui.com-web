// libs
import React from "react";

// components
import SongInformation from "../SongInformation";
import MusicRank from "../MusicRank";
import MusicFirstRank from "../MusicFirstRank";

// others
import "./styles.scss";

const Music = (props) => (
  <li className="music" title={props.title}>
    {props.id === "1" ? (
      <MusicFirstRank id={props.id} image={props.image}></MusicFirstRank>
    ) : (
      <MusicRank id={props.id}></MusicRank>
    )}
    <SongInformation songName={props.songName} title={props.title}></SongInformation>
  </li>
);

export default Music;
