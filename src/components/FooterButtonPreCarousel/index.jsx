// libs
import React from "react";
// others
import "./styles.scss";

const FooterButtonPreCarousel = ({ startId, setStartId, stopId, setStopId }) => (
  <div
    className="btn-prev"
    onClick={() => {
      if (startId === 0) {
        setStartId(9);
        setStopId(15);
      } else {
        setStartId(startId - 1);
        setStopId(stopId - 1);
      }
    }}
  ></div>
);
export default FooterButtonPreCarousel;
