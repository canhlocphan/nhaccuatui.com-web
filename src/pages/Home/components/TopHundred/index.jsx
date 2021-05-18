// libs
import React from "react";
// components
import TopHundredHead from "../TopHundredHead";
import BoxContentHundred from "../BoxContentHundred";
// others
import "./styles.scss";

const TopHundred = ({ topHundred }) => (
  <div className="top-hundred-container">
    <TopHundredHead />
    <BoxContentHundred home={topHundred} />
    <div className="all">
      <span>Xem tất cả TOP 100</span>
    </div>
  </div>
);

export default TopHundred;
