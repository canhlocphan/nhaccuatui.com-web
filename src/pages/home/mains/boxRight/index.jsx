import React from "react";

// components
import TrendArtist from "../../components/trendArtist";
import DiscoveryPlayList from "../../components/discoveryPlaylist";
import TocpicMusic from "../../components/topicMusic";
import ChartMV from "../../components/chartMV";
import TopHundred from "../../components/topHundred";
import ChartMusic from "../../components/chartMusic";

import "./styles.scss";

const BoxRight = () => (
  <div className="box-right">
    <TrendArtist />
    <DiscoveryPlayList />
    <TocpicMusic />
    <ChartMusic />
    <ChartMV />
    <TopHundred />
  </div>
);

export default BoxRight;
