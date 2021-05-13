// libs
import React from "react";
import Album from "../../Album";

// others
import "./styles.scss";

const AlbumListAlbumHot = (props) => (
  <ul className="album-list-album-hot">
    {props.home.albumHot.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      const songArtist = temp[2] || temp[1];
      return (
        <li className="box-album" key={id} title={title}>
          <Album image={image} view={view}></Album>
          <div className="info">
            <div className="name-song">{songName}</div>
            <div className="name-artist">{songArtist}</div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default AlbumListAlbumHot;
