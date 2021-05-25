// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import LargeVideoList from "../LargeVideoList";
import SmallVideoList from "../SmallVideoList";
// others
import "./styles.scss";

const MvHot = ({ mvHot, nameTitle }) => (
  <div className="mv-hot-wrapper">
    <div className="mv-hot">
      <TitleBoxKey nameTitle={nameTitle} />
      <LargeVideoList home={mvHot} />
      <SmallVideoList home={mvHot} />
    </div>
  </div>
);

export default MvHot;
