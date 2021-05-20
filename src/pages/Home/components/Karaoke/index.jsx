// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SmallVideoList from "../SmallVideoList";
// others
import "./styles.scss";

const Karaoke = ({ karaoke, nameTitle }) => (
  <div className="karaoke">
    <div className="karaoke-container">
      <TitleBoxKey nameTitle={nameTitle} />
      <SmallVideoList home={karaoke} />
    </div>
  </div>
);

export default Karaoke;
