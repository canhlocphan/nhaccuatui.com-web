import React from "react";

import "./styles.scss";

const MainTrendArtist = (props) => (
  <div className="main-trend-artist">
    <div className="main-artist-slide">
      <img className="image" src={props.image} alt="artist"></img>
    </div>
    <div className="main-artist-info">
      <div className="title">Top Nghệ Sĩ Trending Trong Tuần</div>
      <div className="artist-name">{props.artist}</div>
    </div>
  </div>
);

export default MainTrendArtist;
