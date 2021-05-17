// libs
import React, { useState } from "react";

// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TabSelect from "../TabSelect";

// mocks
import Home from "../../../../mocks/Home";
import MVList from "../MVList";

// others
import "./styles.scss";

const ChartMV = () => {
  const [typeMusic, setTypeMusic] = useState(1);
  return (
    <div className="chart-music-container">
      <TitleBoxKey>BXH MV</TitleBoxKey>
      <TabSelect typeMusic={typeMusic} setTypeMusic={setTypeMusic}></TabSelect>
      {typeMusic === 1 && <MVList home={Home.chartMV.bXHMVVN} typeMusic={typeMusic}></MVList>}
      {typeMusic === 2 && <MVList home={Home.chartMV.bXHMVUS} typeMusic={typeMusic}></MVList>}
      {typeMusic === 3 && <MVList home={Home.chartMV.bXHMVK} typeMusic={typeMusic}></MVList>}
    </div>
  );
};

export default ChartMV;
