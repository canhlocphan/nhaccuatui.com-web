// libs
import React from "react";
// others
import "./styles.scss";

const FooterButtonNextCarousel = ({ startId, setStartId, stopId, setStopId }) => (
  <div
    className="btn-next"
    onClick={() => {
      if (startId === 9) {
        setStartId(0);
        setStopId(6);
      } else {
        setStartId(startId + 1);
        setStopId(stopId + 1);
      }
    }}
  ></div>
);
export default FooterButtonNextCarousel;
