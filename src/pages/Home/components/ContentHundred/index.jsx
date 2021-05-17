// libs
import React from "react";

// components
import ImageContentHundred from "../ImageContentHundred";
import TitleContentHundred from "../TitleContentHundred";

// others
import "./styles.scss";

const ContentHundred = (props) => (
  <li className="content">
    <ImageContentHundred image={props.image}></ImageContentHundred>
    <TitleContentHundred title={props.title}></TitleContentHundred>
  </li>
);

export default ContentHundred;
