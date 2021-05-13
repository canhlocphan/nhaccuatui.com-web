import React from "react";

import "./styles.scss";

const TitleBoxKey = (props) => (
  <h2 className="title-box-key" title={props.children}>
    <div className="title">{props.children}</div>
  </h2>
);

export default TitleBoxKey;
