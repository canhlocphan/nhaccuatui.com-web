// libs
import React from "react";

// components
import BackgroundVideo from "../BackgroundVideo";

// others
import "./styles.scss";

const ImageContentHundred = (props) => (
  <div className="bg-content">
    <BackgroundVideo image={props.image}></BackgroundVideo>
  </div>
);

export default ImageContentHundred;
