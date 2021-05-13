// libs
import React from "react";

// others
import "./styles.scss";

const VideoSmall = (props) => (
  <ul className="video-small-list">
    {props.home.map(({ id, large, image, title, view, time }) => {
      const temp = title.split("-");
      const nameSong = temp[0];
      const nameSinger = temp[1];
      const temp_ = nameSinger.split(",");
      if (large === "0") {
        return (
          <li className="video-small" key={id} title={title}>
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
            </div>
            <h3 className="name-song">{nameSong}</h3>
            <div className="name-singer-list">
              {Object.values(temp_).map(({ value, id }) => {
                if (value === temp_[Object.values(temp_).length - 1])
                  return (
                    <h4
                      className="name-singer"
                      title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}
                      key={id}
                    >
                      {`${value}`}
                    </h4>
                  );
                return (
                  <>
                    <h4
                      className="name-singer"
                      title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}
                      key={id}
                    >
                      {`${value}`}
                    </h4>
                    <span key={id} style={{ marginRight: "2px", fontSize: "13px" }}>
                      ,
                    </span>
                  </>
                );
              })}
            </div>
          </li>
        );
      }
      return <></>;
    })}
  </ul>
);

export default VideoSmall;
