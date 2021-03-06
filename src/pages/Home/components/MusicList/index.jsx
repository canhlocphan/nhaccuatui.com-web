// libs
import React from "react";
// components
import Music from "../Music";
// others
import "./styles.scss";

const MusicList = ({ chartMusic }) => (
  <ul className="music-list">
    {chartMusic.map(({ id, title, image }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <Music key={id} id={id} title={title} image={image} songName={songName}></Music>;
    })}
  </ul>
);
export default MusicList;
