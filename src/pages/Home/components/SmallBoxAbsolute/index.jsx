// libs
import React from "react";

// components
import SmallBox from "../SmallBox";
import TimeVideo from "../TimeVideo";

// others
import "./styles.scss";

const SmallBoxAbsolute = (props) => (
  <div className="small-box-absolute">
    <SmallBox view={props.view} image={props.image}></SmallBox>
    <TimeVideo time={props.time}></TimeVideo>
  </div>
);

export default SmallBoxAbsolute;
