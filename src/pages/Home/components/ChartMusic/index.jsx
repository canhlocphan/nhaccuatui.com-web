// libs
import React, { useState } from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TabSelect from "../TabSelect";
import MusicList from "../MusicList";

// mocks
import Home from "../../../../mocks/Home";

// others
import "./styles.scss";

const ChartMusic = () => {
  const [typeMusic, setTypeMusic] = useState(1);
  return (
    <div className="chart-music-container">
      <TitleBoxKey>BXH Bài Hát</TitleBoxKey>
      <TabSelect typeMusic={typeMusic} setTypeMusic={setTypeMusic}></TabSelect>
      {typeMusic === 1 && <MusicList home={Home.chartMusic.musicVietNam} typeMusic={typeMusic}></MusicList>}
      {typeMusic === 2 && <MusicList home={Home.chartMusic.musicUS} typeMusic={typeMusic}></MusicList>}
      {typeMusic === 3 && <MusicList home={Home.chartMusic.musicK} typeMusic={typeMusic}></MusicList>}
    </div>
  );
};

export default ChartMusic;
