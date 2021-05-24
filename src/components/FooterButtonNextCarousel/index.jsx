// libs
import React from "react";
// others
import "./styles.scss";

const FooterButtonNextCarousel = ({ next }) => (
  <div
    className="btn-next"
    onClick={() => {
      next();
    }}
  ></div>
);
export default FooterButtonNextCarousel;
