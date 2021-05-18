// libs
import React from "react";
// components
import SlideDefaultOptionItem from "../SlideDefaultOptionItem";
// others
import "./styles.scss";

const SlideDefaultOption = ({ slideDefault, setId, imageDefault, setImageDefault }) => (
  <div className="option-slide-wrapper">
    <ul className="option-slide">
      {slideDefault.map(({ id, small, large, title }) => (
        <SlideDefaultOptionItem
          id={id}
          small={small}
          large={large}
          title={title}
          setImageDefault={setImageDefault}
          setId={setId}
          imageDefault={imageDefault}
        />
      ))}
    </ul>
  </div>
);

export default SlideDefaultOption;
