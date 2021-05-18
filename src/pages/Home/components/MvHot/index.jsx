// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import LargeVideoList from "../LargeVideoList";
import SmallVideoList from "../SmallVideoList";
// others
import "./styles.scss";

const MvHot = ({ mvHot }) => (
  <div className="mv-hot">
    <div className="mv-hot-container">
      <TitleBoxKey nameTitle="MV HOT" />
      <LargeVideoList home={mvHot} />
      <SmallVideoList home={mvHot} />
    </div>
  </div>
);

export default MvHot;
