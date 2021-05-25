// libs
import React from "react";
// components
import AlbumActionInfo from "../AlbumActionInfo";
// others
import "./styles.scss";

const Album = ({ view, image }) => (
  <div className="album">
    <AlbumActionInfo view={view} />
    <img className="avatar" src={image} alt="avatar"></img>
  </div>
);

export default Album;
