// libs
import React from "react";

// components
import SongItem from "../SongItem";

// others
import "./styles.scss";

const SongList = (props) => (
  <ul className="song-list">
    {props.home.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <SongItem songName={songName} id={id} title={title} image={image} view={view}></SongItem>;
    })}
  </ul>
);

export default SongList;
