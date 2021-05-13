// libs
import React from "react";

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
          <div className="album">
            <div className="action-info">
              <div className="view-listening">
                <div className="icon-listening"></div>
                <div>{view}</div>
              </div>
              <div className="icon-play"></div>
            </div>
            <img className="avatar" src={image} alt="avatar"></img>
          </div>
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
