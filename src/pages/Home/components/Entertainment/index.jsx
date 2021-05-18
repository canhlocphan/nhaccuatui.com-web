// libs
import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import SmallVideoList from "../SmallVideoList";
// others
import "./styles.scss";

const Entertainment = ({ entertainment }) => (
  <div className="entertainment">
    <div className="entertainment-container">
      <TitleBoxKey nameTitle="Giải trí" />
      <SmallVideoList home={entertainment} />
    </div>
  </div>
);

export default Entertainment;
