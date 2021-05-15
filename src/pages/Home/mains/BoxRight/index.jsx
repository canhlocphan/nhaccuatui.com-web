import React from "react";

// components
import TrendArtist from "../../components/TrendArtist";
import DiscoveryPlayList from "../../components/DiscoveryPlaylist";
import TocpicMusic from "../../components/TopicMusic";
import ChartMV from "../../components/ChartMV";
import TopHundred from "../../components/TopHundred";
import ChartMusic from "../../components/ChartMusic";

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
