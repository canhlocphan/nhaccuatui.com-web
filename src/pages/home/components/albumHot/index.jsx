// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";

// mocks
import Home from "../../../../mocks/Home";
import AlbumListAlbumHot from "./AlbumListAlbumHot";

// others
import "./styles.scss";

const AlbumHot = () => (
  <div className="album-hot">
    <div className="album-hot-container">
      <TitleBoxKey>Mới phát hành</TitleBoxKey>
      <AlbumListAlbumHot home={Home}></AlbumListAlbumHot>
    </div>
  </div>
);

export default AlbumHot;
