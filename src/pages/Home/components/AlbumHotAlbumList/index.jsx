// libs
import React from "react";
// components
import BoxAlbum from "../BoxAlbum";
// others
import "./styles.scss";

const AlbumHotAlbumList = ({ albumHot }) => (
  <ul className="album-list">
    {albumHot.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <BoxAlbum key={id} id={id} title={title} view={view} image={image} songName={songName}></BoxAlbum>;
    })}
  </ul>
);

export default AlbumHotAlbumList;
