// libs
import React from "react";

// components
import BackgroundVideo from "../BackgroundVideo";
import ViewMV from "../ViewMV";

// others
import "./styles.scss";

const SmallBox = (props) => (
  <div className="box">
    <div className="overlay"></div>
    <ViewMV view={props.view}></ViewMV>
    <BackgroundVideo image={props.image}></BackgroundVideo>
  </div>
);

export default SmallBox;
