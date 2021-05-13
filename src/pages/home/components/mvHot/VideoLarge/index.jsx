// libs
import React from "react";

// others
import "./styles.scss";

const VideoLarge = (props) => (
  <ul className="video-large-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const nameSong = temp[0];
      const nameSinger = temp[1].split(",")[0];
      const nameSingers = temp[1].split(",")[1];
      if (large === "1") {
        return (
          <li className="video-large" key={id} title={title}>
            <div className="box-absolute">
              <div className="view-mv">
                <div className="icon-view"></div>
                <div className="view">{view}</div>
              </div>
              <div className="view-time">{time}</div>
              <div className="bg-video">
                <div className="icon-play"></div>
                <img className="image" src={image} alt="video"></img>
              </div>
              <div className="name-video-large">
                <h3 className="name-song">{nameSong}</h3>
                <h4 className="name-singer">
                  <div>{nameSinger}</div>
                  {nameSingers && <div>{`, ${nameSingers}`}</div>}
                </h4>
              </div>
            </div>
          </li>
        );
      }
      return <></>;
    })}
  </ul>
);

export default VideoLarge;
