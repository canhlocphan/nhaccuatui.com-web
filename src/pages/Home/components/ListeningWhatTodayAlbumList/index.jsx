// libs
import React from "react";
// components
import BoxAlbum from "../BoxAlbum";
// others
import "./styles.scss";

const ListeningWhatTodayAlbumList = ({ listeningWhatToday }) => (
  <ul className="album-list">
    {listeningWhatToday.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      return <BoxAlbum id={id} key={id} title={title} view={view} image={image} songName={songName} />;
    })}
  </ul>
);

export default ListeningWhatTodayAlbumList;
