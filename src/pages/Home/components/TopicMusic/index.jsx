import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TopicList from "../TopicList";

// mocks
import Home from "../../../../mocks/Home";

import "./styles.scss";

const TopMusic = () => (
  <div className="top-music-container">
    <TitleBoxKey>Chủ đề hot</TitleBoxKey>
    <TopicList home={Home.topMusic}></TopicList>
  </div>
);

export default TopMusic;
