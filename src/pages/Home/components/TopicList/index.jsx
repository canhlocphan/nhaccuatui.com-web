// libs
import React from "react";
// components
import Topic from "../Topic";
// others
import "./styles.scss";

const TopicList = ({ topMusic }) => (
  <ul className="topic-list">
    {topMusic.map(({ id, image, title }) => (
      <Topic key={id} image={image} title={title} />
    ))}
  </ul>
);

export default TopicList;
