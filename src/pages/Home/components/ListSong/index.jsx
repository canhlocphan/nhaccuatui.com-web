// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SongList from "../SongList";
// others
import "./styles.scss";

const ListSong = ({ listSong }) => (
  <div className="list-song-container">
    <div className="list-song">
      <TitleBoxKey nameTitle="MV HOT" />
      <SongList listSong={listSong} />
    </div>
  </div>
);

export default ListSong;
