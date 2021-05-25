// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import AlbumHotAlbumList from "../AlbumHotAlbumList";
// others
import "./styles.scss";

const AlbumHot = ({ albumHot, nameTitle }) => (
  <div className="album-hot-wrapper">
    <div className="album-hot">
      <TitleBoxKey nameTitle={nameTitle} />
      <AlbumHotAlbumList albumHot={albumHot} />
    </div>
  </div>
);

export default AlbumHot;
