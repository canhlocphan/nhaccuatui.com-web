// libs
import React from "react";

// others
import "./styles.scss";

const NameSingerList = (props) => {
  const temp = props.title.split("-");
  const nameSinger = temp[1];
  const temp_ = nameSinger.split(",");
  return (
    <div className="name-singer-list">
      {temp_.map((value) => {
        if (value === temp_[temp_.length - 1])
          return (
            <h4 className="name-singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
              {`${value}`}
            </h4>
          );
        return (
          <>
            <h4 className="name-singer" title={`Tìm các bài hát, playlist, mv do ca sĩ ${value} trình bày`}>
              {`${value}`}
            </h4>
            <span className="space">,</span>
          </>
        );
      })}
    </div>
  );
};

export default NameSingerList;
