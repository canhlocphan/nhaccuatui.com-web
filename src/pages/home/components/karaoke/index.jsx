// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import VideoSmall from "../MvHot/VideoSmall";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const Karaoke = () => (
  <div className="karaoke">
    <div className="karaoke-container">
      <TitleBoxKey>Karaoke</TitleBoxKey>
      <VideoSmall home={Home.karaoke}></VideoSmall>
    </div>
  </div>
);

export default Karaoke;
