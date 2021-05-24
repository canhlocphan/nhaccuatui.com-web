// libs
import React from "react";
// others
import "./styles.scss";

const SlideDefaultOptionItem = ({ item, imageDefault, handleImageDefault }) => (
  <li
    className="option-slide-item"
    title={item.title}
    onMouseEnter={() => {
      handleImageDefault(item.id, item.large);
    }}
  >
    <span className={`${imageDefault === item.large ? "active" : "none"}`}></span>
    <img src={item.small} alt="option-slide-item" style={{ cursor: "pointer" }}></img>
  </li>
);

export default SlideDefaultOptionItem;
