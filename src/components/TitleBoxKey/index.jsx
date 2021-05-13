import React from "react";

import "./styles.scss";

const TitleBoxKey = (props) => (
  <h2 className="title-box-key">
    <div className="title" title={props.children}>
      {props.children}
    </div>
  </h2>
);

export default TitleBoxKey;
