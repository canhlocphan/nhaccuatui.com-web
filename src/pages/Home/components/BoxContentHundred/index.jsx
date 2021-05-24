// libs
import React from "react";

// components
import ContentHundred from "../ContentHundred";

// others
import "./styles.scss";

const BoxContentHundred = (props) => (
  <ul className="box-content-hundred">
    {props.home.map(({ id, image, title }) => (
      <ContentHundred key={id} image={image} title={title}></ContentHundred>
    ))}
  </ul>
);

export default BoxContentHundred;
