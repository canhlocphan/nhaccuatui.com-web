// libs
import React from "react";

// components
import Topic from "../Topic";

// others
import "./styles.scss";

const TopicList = (props) => (
  <ul className="topic-list">
    {props.home.map(({ id, image, title }) => (
      <Topic key={id} image={image} title={title}></Topic>
    ))}
  </ul>
);

export default TopicList;
