// libs
import React from "react";
import Album from "../../Album";

// others
import "./styles.scss";

const AlbumList = (props) => (
  <ul className="album-list" style={{ listStyle: "none", padding: "0", margin: "0px" }}>
    {props.home.listeningWhatToday.map(({ id, image, title, view }) => {
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

export default AlbumList;
