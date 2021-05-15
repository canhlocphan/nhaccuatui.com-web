// libs
import React from "react";

// components
import Album from "../Album";
import SongInformation from "../SongInformation";

// others
import "./styles.scss";

const AlbumList = (props) => (
  <li className="box-album" key={props.id} title={props.title}>
    <Album image={props.image} view={props.view}></Album>
    <SongInformation songName={props.songName} title={props.title}></SongInformation>
  </li>
);

export default AlbumList;
