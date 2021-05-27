// libs
import React, { useState } from "react";
// components
import Song from "../Song";
import IconListen from "../IconListen";
// others
import "./styles.scss";

const SongItem = ({ id, title, songName, image, view }) => {
  const [actionSong, setActionSong] = useState(false);
  return (
    <li className="song-item" key={id} title={title}>
      <div
        className="box-content-song"
        onMouseEnter={() => {
          setActionSong(true);
        }}
        onMouseLeave={() => {
          setActionSong(false);
        }}
      >
        <Song songName={songName} title={title} image={image} />
        <IconListen view={view} actionSong={actionSong} />
      </div>
    </li>
  );
};

export default SongItem;
