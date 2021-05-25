// libs
import React from "react";
// components
import BoxAlbum from "../BoxAlbum";
// others
import "./styles.scss";

const ListeningWhatTodayAlbumList = ({ listeningWhatToday }) => (
  <ul className="album-list" style={{ listStyle: "none", padding: "0", margin: "0px" }}>
    {listeningWhatToday.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <BoxAlbum id={id} title={title} view={view} image={image} songName={songName} />;
    })}
  </ul>
);

export default ListeningWhatTodayAlbumList;
