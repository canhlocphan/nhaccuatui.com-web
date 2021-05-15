// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";

// mocks
import Home from "../../../../mocks/Home";
import AlbumList from "../AlbumList";

// others
import "./styles.scss";

const AlbumHot = () => (
  <div className="album-hot">
    <div className="album-hot-container">
      <TitleBoxKey>Mới phát hành</TitleBoxKey>
      <AlbumList home={Home}></AlbumList>
    </div>
  </div>
);

export default AlbumHot;
