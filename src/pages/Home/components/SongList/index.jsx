// libs
import React from "react";
// components
import SongItem from "../SongItem";
// others
import "./styles.scss";

const SongList = ({ listSong }) => (
  <ul className="song-list">
    {listSong.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <SongItem key={id} songName={songName} id={id} title={title} image={image} view={view} />;
    })}
  </ul>
);

export default SongList;
