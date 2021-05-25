// libs
import React from "react";
// others
import "./styles.scss";

const MainArtitsInfo = ({ artist }) => (
  <div className="main-artist-info">
    <div className="title">Top Nghệ Sĩ Trending Trong Tuần</div>
    <div className="artist-name">{artist}</div>
  </div>
);

export default MainArtitsInfo;
