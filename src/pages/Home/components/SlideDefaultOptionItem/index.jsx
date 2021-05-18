// libs
import React from "react";
// others
import "./styles.scss";

const SlideDefaultOptionItem = ({ id, title, small, large, setId, imageDefault, setImageDefault }) => (
  <li
    key={id}
    className="option-slide-item"
    title={title}
    onMouseEnter={() => {
      setImageDefault(large);
      setId(parseInt(id, 10));
    }}
  >
    <span className={`${imageDefault === large ? "active" : "none"}`}></span>
    <img src={small} alt="option-slide-item" style={{ cursor: "pointer" }}></img>
  </li>
);

export default SlideDefaultOptionItem;
