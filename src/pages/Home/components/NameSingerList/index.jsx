// libs
import React from "react";
// others
import "./styles.scss";

const NameSingerList = (props) => {
  const temp = props.title.split("-");
  const nameSingerList = temp[1].split(",");
  return (
    <div className="name-singer-list">
      {nameSingerList.map((value) => {
        if (value === nameSingerList[nameSingerList.length - 1])
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
