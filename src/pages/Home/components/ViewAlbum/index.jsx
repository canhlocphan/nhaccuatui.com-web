// libs
import React from "react";
// others
import "./styles.scss";

const ViewAlbum = ({ view }) => (
  <div className="view-listening">
    <div className="icon-listening"></div>
    <div>{view}</div>
  </div>
);

export default ViewAlbum;
