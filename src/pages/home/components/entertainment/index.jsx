// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SmallVideoList from "../SmallVideoList";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const Entertainment = () => (
  <div className="entertainment">
    <div className="entertainment-container">
      <TitleBoxKey>Giải trí</TitleBoxKey>
      <SmallVideoList home={Home.entertainment}></SmallVideoList>
    </div>
  </div>
);

export default Entertainment;
