// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SongList from "../SongList";
// others
import "./styles.scss";

const ListSong = ({ listSong, nameTitle }) => (
  <div className="list-song-wrapper">
    <div className="list-song">
      <TitleBoxKey nameTitle={nameTitle} />
      <SongList listSong={listSong} />
    </div>
  </div>
);

export default ListSong;
