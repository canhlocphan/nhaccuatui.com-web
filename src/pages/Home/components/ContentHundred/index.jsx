// libs
import React from "react";
// components
import ImageContentHundred from "../ImageContentHundred";
import TitleContentHundred from "../TitleContentHundred";
// others
import "./styles.scss";

const ContentHundred = ({ image, title }) => (
  <li className="content">
    <ImageContentHundred image={image}></ImageContentHundred>
    <TitleContentHundred title={title}></TitleContentHundred>
  </li>
);

export default ContentHundred;
