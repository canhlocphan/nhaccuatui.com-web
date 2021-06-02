// libs
import React from "react";
// components
import ButtonTab from "../ButtonTab";
// others
import "./styles.scss";

const TabSelect = ({ typeMusic, setTypeMusic }) => (
  <div className="tab-select-container">
    <ButtonTab active={typeMusic === 1} setTypeMusic={setTypeMusic} id={1} titleName="Việt Nam" />
    <span className="space"></span>
    <ButtonTab active={typeMusic === 2} setTypeMusic={setTypeMusic} id={2} titleName="Âu Mỹ" />
    <span className="space"></span>
    <ButtonTab active={typeMusic === 3} setTypeMusic={setTypeMusic} id={3} titleName="Hàn Quốc" />
  </div>
);

export default TabSelect;
