// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import AlbumHotAlbumList from "../AlbumHotAlbumList";
// others
import "./styles.scss";

const AlbumHot = ({ albumHot }) => (
  <div className="album-hot">
    <div className="album-hot-container">
      <TitleBoxKey nameTitle="Mới phát hành" />
      <AlbumHotAlbumList albumHot={albumHot} />
    </div>
  </div>
);

export default AlbumHot;
