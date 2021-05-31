// libs
import React, { useState } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TabSelect from "../TabSelect";
import MusicList from "../MusicList";
// others
import "./styles.scss";

const ChartMusic = ({ chartMusic, nameTitle }) => {
  const [typeMusic, setTypeMusic] = useState(1);
  return (
    <div className="chart-music-wrapper">
      <TitleBoxKey nameTitle={nameTitle} />
      <TabSelect typeMusic={typeMusic} setTypeMusic={setTypeMusic}></TabSelect>
      {typeMusic === 1 && <MusicList chartMusic={chartMusic.musicVietNam} />}
      {typeMusic === 2 && <MusicList chartMusic={chartMusic.musicUS} />}
      {typeMusic === 3 && <MusicList chartMusic={chartMusic.musicK} />}
    </div>
  );
};

export default ChartMusic;
