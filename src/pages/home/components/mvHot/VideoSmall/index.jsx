// libs
import React from "react";

// components
import SmallBoxAbsolute from "../../SmallBoxAbsolute";
import NameSingerList from "../../NameSingerList";

// others
import "./styles.scss";

const VideoSmall = (props) => (
  <ul className="video-small-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const nameSong = temp[0];
      if (large === "0") {
        return (
          <li className="video-small" key={id} title={title}>
            <SmallBoxAbsolute image={image} view={view} time={time}></SmallBoxAbsolute>
            <h3 className="name-song">{nameSong}</h3>
            <NameSingerList title={title}></NameSingerList>
          </li>
        );
      }
      return <></>;
    })}
  </ul>
);

export default VideoSmall;
