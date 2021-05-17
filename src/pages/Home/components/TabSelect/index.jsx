// libs
import React from "react";

// components
import ButtonTab from "../ButtonTab";

// others
import "./styles.scss";

const TabSelect = (props) => (
  <div className="tab-select-container">
    <ButtonTab active={props.typeMusic === 1} setTypeMusic={props.setTypeMusic} id={1}>
      Việt Nam
    </ButtonTab>
    <span className="space"></span>
    <ButtonTab active={props.typeMusic === 2} setTypeMusic={props.setTypeMusic} id={2}>
      Âu Mỹ
    </ButtonTab>
    <span className="space"></span>
    <ButtonTab active={props.typeMusic === 3} setTypeMusic={props.setTypeMusic} id={3}>
      Hàn Quốc
    </ButtonTab>
  </div>
);

export default TabSelect;
