// libs
import React from "react";
// others
import "./styles.scss";
import { CaretRightOutlined } from "@ant-design/icons";

const ButtonPlaylist = () => (
  <div className="btn-playlist">
    <CaretRightOutlined className="icon-play" />
    <span className="text-detail">Nghe bài hát</span>
  </div>
);

export default ButtonPlaylist;
