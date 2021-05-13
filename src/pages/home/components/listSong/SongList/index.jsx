// libs
import React from "react";

// others
import "./styles.scss";
import { CustomerServiceOutlined } from "@ant-design/icons";

const SongList = (props) => (
  <ul className="song-list">
    {props.home.map(({ id, image, title, view }) => {
      const temp = title.split("-");
      const songName = temp[0];
      const songArtist = temp[1];
      const temp_ = songArtist.split(",");
      return (
        <li className="song-item" key={id} title={title}>
          <div className="box-content-song">
            <div className="song">
              <div className="bg-image">
                <img src={image} alt="bg-img"></img>
              </div>
              <div className="info-song">
                <div className="name-song">{songName}</div>
                <div className="name-singer">
                  {Object.values(temp_).map((value) => {
                    if (value === temp_[Object.values(temp_).length - 1])
                      return (
                        <div className="singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
                          {`${value}`}
                        </div>
                      );
                    return (
                      <>
                        <div className="singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
                          {`${value}`}
                        </div>
                        <span style={{ marginRight: "2px" }}>,</span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="icon-listen">
              <CustomerServiceOutlined className="icon" />
              {` ${view}`}
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default SongList;
