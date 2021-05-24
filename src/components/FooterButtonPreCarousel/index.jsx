// libs
import React from "react";
// others
import "./styles.scss";

const FooterButtonPreCarousel = ({ prev }) => (
  <div
    className="btn-prev"
    onClick={() => {
      prev();
    }}
  ></div>
);
export default FooterButtonPreCarousel;
