// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import VideoLarge from "./VideoLarge";
import VideoSmall from "./VideoSmall";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const MvHot = () => (
  <div className="mv-hot">
    <div className="mv-hot-container">
      <TitleBoxKey>MV HOT</TitleBoxKey>
      <VideoLarge home={Home.mvHot}></VideoLarge>
      <VideoSmall home={Home.mvHot}></VideoSmall>
    </div>
  </div>
);

export default MvHot;
