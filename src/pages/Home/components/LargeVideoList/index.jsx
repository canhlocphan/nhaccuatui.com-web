// libs
import React from "react";
// components
import LargeVideo from "../LargeVideo";
// others
import "./styles.scss";

const LargeVideoList = ({ home }) => (
  <ul className="video-large-list">
    {home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const songName = temp[0];
      if (large === "1") {
        return <LargeVideo key={id} songName={songName} id={id} title={title} image={image} view={view} time={time} />;
      }
      return <div className="video-large-none" key={id}></div>;
    })}
  </ul>
);

export default LargeVideoList;
