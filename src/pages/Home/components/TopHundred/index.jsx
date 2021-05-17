// libs
import React from "react";

// components
import TopHundredHead from "../TopHundredHead";
import BoxContentHundred from "../BoxContentHundred";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const TopHundred = () => (
  <div className="top-hundred-container">
    <TopHundredHead></TopHundredHead>
    <BoxContentHundred home={Home.topHundred}></BoxContentHundred>
    <div className="all">
      <span>Xem tất cả TOP 100</span>
    </div>
  </div>
);

export default TopHundred;
