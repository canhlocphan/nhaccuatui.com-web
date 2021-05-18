// libs
import React from "react";
// components
import Album from "../Album";
// others
import "./styles.scss";

const ListeningWhatTodayAlbumList = ({ listeningWhatToday }) => (
  <ul className="album-list" style={{ listStyle: "none", padding: "0", margin: "0px" }}>
    {listeningWhatToday.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const titleName = temp[0];
      return (
        <li className="box-album" key={id} title={title}>
          <Album image={image} view={view}></Album>
          <div className="info">
            <div className="name-song">{titleName}</div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default ListeningWhatTodayAlbumList;
