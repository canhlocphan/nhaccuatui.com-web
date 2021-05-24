// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TopicList from "../TopicList";
import "./styles.scss";

const TopMusic = ({ topMusic, nameTitle }) => (
  <div className="top-music-container">
    <TitleBoxKey nameTitle={nameTitle} />
    <TopicList topMusic={topMusic} />
  </div>
);

export default TopMusic;
