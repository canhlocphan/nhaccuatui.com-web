// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SongList from "./SongList";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const ListSong = () => (
  <div className="list-song">
    <div className="list-song-container">
      <TitleBoxKey>Bài Hát</TitleBoxKey>
      <SongList home={Home.song}></SongList>
    </div>
  </div>
);

export default ListSong;
