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

const BoxRight = ({ Home, defaultLanguage }) => (
  <div className="box-right-wrapper">
    <TrendArtist trendArtist={Home.trendArtist} />
    <DiscoveryPlayList />
    <TocpicMusic topMusic={Home.topMusic} nameTitle={defaultLanguage.topicHot} />
    <ChartMusic chartMusic={Home.chartMusic} nameTitle={defaultLanguage.chartSong} />
    <ChartMV chartMV={Home.chartMV} nameTitle={defaultLanguage.chartMV} />
    <TopHundred topHundred={Home.topHundred} />
  </div>
);

export default BoxRight;
