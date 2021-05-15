// libs
import React from "react";

// components
import BoxAlbum from "../BoxAlbum";

// others
import "./styles.scss";

const AlbumList = (props) => (
  <ul className="album-list">
    {props.home.albumHot.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <BoxAlbum id={id} title={title} view={view} image={image} songName={songName}></BoxAlbum>;
    })}
  </ul>
);

export default AlbumList;
