// libs
import React from "react";
// components
import Album from "../Album";
import SongInformation from "../SongInformation";
// others
import "./styles.scss";

const BoxAlbum = ({ id, title, view, image, songName }) => (
  <li className="box-album" key={id} title={title}>
    <Album image={image} view={view} />
    <SongInformation songName={songName} title={title}></SongInformation>
  </li>
);

export default BoxAlbum;
