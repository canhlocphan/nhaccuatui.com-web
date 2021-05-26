// libs
import React from "react";
// others
import "./styles.scss";

const BackgroundVideo = ({ image }) => (
  <div className="bg-video">
    <div className="icon-play">
      <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="icon-play"></img>
    </div>
    <img className="image" src={image} alt="video"></img>
  </div>
);

export default BackgroundVideo;
