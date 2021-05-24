// libs
import React from "react";
// others
import "./styles.scss";

const TitleBoxKey = ({ nameTitle }) => (
  <h2 className="title-box-key">
    <div className="title" title={nameTitle}>
      {nameTitle}
    </div>
  </h2>
);

export default TitleBoxKey;
