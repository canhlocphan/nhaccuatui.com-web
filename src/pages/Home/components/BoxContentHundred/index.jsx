// libs
import React from "react";
// components
import ContentHundred from "../ContentHundred";
// others
import "./styles.scss";

const BoxContentHundred = ({ home }) => (
  <ul className="box-content-hundred">
    {home.map(({ id, image, title }) => (
      <ContentHundred key={id} image={image} title={title} />
    ))}
  </ul>
);

export default BoxContentHundred;
