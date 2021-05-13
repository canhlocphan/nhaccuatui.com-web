// libs
import React from "react";

// others
import "./styles.scss";

const AlbumList = (props) => (
  <ul className="album-list" style={{ listStyle: "none", padding: "0", margin: "0px" }}>
    {props.home.listeningWhatToday.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const titleName = temp[0];
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
            <div className="name-song">{titleName}</div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default AlbumList;
