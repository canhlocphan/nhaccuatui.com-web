// libs
import React from "react";

// others
import "./styles.scss";

const ViewMV = (props) => (
  <div className="view-mv">
    <div className="icon-view"></div>
    <div className="view">{props.view}</div>
  </div>
);

export default ViewMV;
