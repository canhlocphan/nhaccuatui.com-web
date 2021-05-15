// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import LargeVideoList from "../LargeVideoList";
import SmallVideoList from "../SmallVideoList";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const MvHot = () => (
  <div className="mv-hot">
    <div className="mv-hot-container">
      <TitleBoxKey>MV HOT</TitleBoxKey>
      <LargeVideoList home={Home.mvHot}></LargeVideoList>
      <SmallVideoList home={Home.mvHot}></SmallVideoList>
    </div>
  </div>
);

export default MvHot;
