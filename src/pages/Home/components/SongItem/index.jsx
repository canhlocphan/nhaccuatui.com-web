// libs
import React, { useState } from "react";

// components
import Song from "../Song";
import IconListen from "../IconListen";

// others
import "./styles.scss";

const SongItem = (props) => {
  const [actionSong, setActionSong] = useState(false);
  return (
    <li className="song-item" key={props.id} title={props.title}>
      <div
        className="box-content-song"
        onMouseEnter={() => {
          setActionSong(true);
        }}
        onMouseLeave={() => {
          setActionSong(false);
        }}
      >
        <Song songName={props.songName} title={props.title} image={props.image}></Song>
        <IconListen view={props.view} actionSong={actionSong}></IconListen>
      </div>
    </li>
  );
};

export default SongItem;
