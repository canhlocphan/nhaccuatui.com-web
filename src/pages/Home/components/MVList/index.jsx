// libs
import React from "react";
// components
import MV from "../MV";
import SmallMV from "../SmallMV";
// others
import "./styles.scss";

const MVList = ({ home }) => (
  <ul className="mv-list">
    {home.map(({ id, large, image, title }) => {
      const temp = title.split("-");
      const songName = temp[0];
      if (large === "1") {
        return <MV key={id} id={id} image={image} title={title} songName={songName} />;
      }
      return <SmallMV key={id} id={id} image={image} songName={songName} title={title} />;
    })}
  </ul>
);
export default MVList;
