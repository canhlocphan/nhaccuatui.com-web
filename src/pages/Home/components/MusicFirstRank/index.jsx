// libs
import React from "react";

// others
import "./styles.scss";

const MusicFirstRank = (props) => (
  <div className="first-rank">
    <div className="image">
      <img src={props.image} alt="first-rank-img"></img>
      <div className="one-rank">{props.id}</div>
    </div>
  </div>
);
export default MusicFirstRank;
