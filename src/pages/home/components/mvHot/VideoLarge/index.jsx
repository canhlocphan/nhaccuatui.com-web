// libs
import React from "react";

// others
import "./styles.scss";

const VideoLarge = (props) => (
  <ul className="video-large-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const nameSong = temp[0];
      const nameSinger = temp[1];
      const temp_ = nameSinger.split(",");
      if (large === "1") {
        return (
          <li className="video-large" key={id}>
            <div className="box-absolute">
              <div className="view-mv">
                <div className="icon-view"></div>
                <div className="view">{view}</div>
              </div>
              <div className="view-time">{time}</div>
              <div className="bg-video" title={title}>
                <div className="icon-play"></div>
                <img className="image" src={image} alt="video"></img>
              </div>
              <div className="name-video-large">
                <h3 className="name-song" title={title}>
                  {nameSong}
                </h3>
                <div className="name-singer-list">
                  {temp_.map((value) => {
                    if (value === temp_[temp_.length - 1])
                      return (
                        <h4 className="name-singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
                          {value}
                        </h4>
                      );
                    return (
                      <>
                        <h4 className="name-singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
                          {value}
                        </h4>
                        <span className="space">,</span>
                      </>
                    );
                  })}
                </div>
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
