// libs
import React from "react";
// components
import ViewAlbum from "../ViewAlbum";
// others
import "./styles.scss";

const AlbumActionInfo = ({ view }) => (
  <div className="action-info">
    <ViewAlbum view={view} />
    <div className="icon-play"></div>
  </div>
);

export default AlbumActionInfo;
