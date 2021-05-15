import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import AlbumList from "./AlbumList";

// mocks
import Home from "../../../../mocks/Home";

import "./styles.scss";

const ListeningWhatToday = () => (
  <div className="listening-what-today">
    <div className="listening-what-today-container">
      <TitleBoxKey>Nghe gì hôm nay</TitleBoxKey>
      <AlbumList home={Home}></AlbumList>
    </div>
  </div>
);

export default ListeningWhatToday;
