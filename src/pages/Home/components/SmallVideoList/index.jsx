// libs
import React from "react";
// components
import SmallVideo from "../SmallVideo";
// others
import "./styles.scss";

const SmallVideoList = ({ home }) => (
  <ul className="video-small-list">
    {home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const songName = temp[0];
      if (large === "0") {
        return (
          <SmallVideo
            key={id}
            id={id}
            image={image}
            title={title}
            view={view}
            time={time}
            songName={songName}
          ></SmallVideo>
        );
      }
      return <div className="video-small-none" key={id}></div>;
    })}
  </ul>
);

export default SmallVideoList;
