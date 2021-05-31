// libs
import React from "react";

// others
import "./styles.scss";

const MusicFirstRank = ({ image, id }) => (
  <div className="first-rank">
    <div className="image">
      <img src={image} alt="first-rank-img"></img>
      <div className="one-rank">{id}</div>
    </div>
  </div>
);
export default MusicFirstRank;
