// libs
import React from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SmallVideoList from "../SmallVideoList";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const Karaoke = () => (
  <div className="karaoke">
    <div className="karaoke-container">
      <TitleBoxKey>Karaoke</TitleBoxKey>
      <SmallVideoList home={Home.karaoke}></SmallVideoList>
    </div>
  </div>
);

export default Karaoke;
