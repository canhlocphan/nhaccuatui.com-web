// libs
import React from "react";

// components
import Song from "../Song";
import IconListen from "../IconListen";

// others
import "./styles.scss";

const SongItem = (props) => (
  <li className="song-item" key={props.id} title={props.title}>
    <div className="box-content-song">
      <Song songName={props.songName} title={props.title} image={props.image}></Song>
      <IconListen view={props.view}></IconListen>
    </div>
  </li>
);

export default SongItem;
