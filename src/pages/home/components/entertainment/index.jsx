// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import VideoSmall from "../MvHot/VideoSmall";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const Entertainment = () => (
  <div className="entertainment">
    <div className="entertainment-container">
      <TitleBoxKey>Giải trí</TitleBoxKey>
      <VideoSmall home={Home.entertainment}></VideoSmall>
    </div>
  </div>
);

export default Entertainment;
