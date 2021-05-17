// libs
import React from "react";

// components
import TrendArtist from "../../components/TrendArtist";
import DiscoveryPlayList from "../../components/DiscoveryPlaylist";
import TocpicMusic from "../../components/TopicMusic";
import ChartMV from "../../components/ChartMV";
import ChartMusic from "../../components/ChartMusic";
import TopHundred from "../../components/TopHundred";

// others
import "./styles.scss";

const BoxRight = () => (
  <div className="box-right-wrapper">
    <TrendArtist />
    <DiscoveryPlayList />
    <TocpicMusic />
    <ChartMusic />
    <ChartMV />
    <TopHundred />
  </div>
);

export default BoxRight;
