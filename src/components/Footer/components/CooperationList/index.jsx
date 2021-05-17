// libs
import React from "react";

// components
import CooperationItem from "../CooperationItem";

// others
import "./styles.scss";

const CooperationList = (props) => (
  <ul className="footer-cooperation-list">
    {props.header.slice(props.startId, props.stopId).map(({ id, image }) => (
      <CooperationItem key={id} image={image}></CooperationItem>
    ))}
  </ul>
);
export default CooperationList;
