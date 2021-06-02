// libs
import React, { useState } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import TabSelect from "../TabSelect";
import MVList from "../MVList";
// others
import "./styles.scss";

const ChartMV = ({ chartMV, nameTitle }) => {
  const [typeMusic, setTypeMusic] = useState(1);
  return (
    <div className="chart-mv-wrapper">
      <TitleBoxKey nameTitle={nameTitle} />
      <TabSelect typeMusic={typeMusic} setTypeMusic={setTypeMusic}></TabSelect>
      {typeMusic === 1 && <MVList home={chartMV.bXHMVVN} />}
      {typeMusic === 2 && <MVList home={chartMV.bXHMVUS} />}
      {typeMusic === 3 && <MVList home={chartMV.bXHMVK} />}
    </div>
  );
};

export default ChartMV;
