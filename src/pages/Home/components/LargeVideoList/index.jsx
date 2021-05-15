// libs
import React from "react";

// components
import LargeVideo from "../LargeVideo";

// others
import "./styles.scss";

const LargeVideoList = (props) => (
  <ul className="video-large-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const songName = temp[0];
      if (large === "1") {
        return (
          <LargeVideo songName={songName} id={id} title={title} image={image} view={view} time={time}></LargeVideo>
        );
      }
      return <></>;
    })}
  </ul>
);

export default LargeVideoList;
