// libs
import React from "react";

// components
import SmallVideo from "../SmallVideo";

// others
import "./styles.scss";

const SmallVideoList = (props) => (
  <ul className="video-small-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const songName = temp[0];
      if (large === "0") {
        return (
          <SmallVideo id={id} image={image} title={title} view={view} time={time} songName={songName}></SmallVideo>
        );
      }
      return <></>;
    })}
  </ul>
);

export default SmallVideoList;
