// libs
import React, { memo, useEffect, useState } from "react";
// components
import FooterCooperationList from "../FooterCooperationList";
import FooterButtonPreCarousel from "../FooterButtonPreCarousel";
import FooterButtonNextCarousel from "../FooterButtonNextCarousel";
// others
import "./styles.scss";

const FooterBoxCooperationList = ({ footer }) => {
  const [startId, setStartId] = useState(0);
  const [stopId, setStopId] = useState(6);
  const next = () => {
    if (startId === 9) {
      setStartId(0);
      setStopId(6);
    } else {
      setStartId(startId + 1);
      setStopId(stopId + 1);
    }
  };
  const prev = () => {
    if (startId === 0) {
      setStartId(9);
      setStopId(15);
    } else {
      setStartId(startId - 1);
      setStopId(stopId - 1);
    }
  };
  useEffect(() => {
    const time = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(time);
  });
  return (
    <div className="footer-cooperation-list-wrapper">
      <FooterCooperationList footer={footer.cooperationList} startId={startId} stopId={stopId}></FooterCooperationList>
      <FooterButtonPreCarousel prev={prev} />
      <FooterButtonNextCarousel next={next} />
    </div>
  );
};

export default memo(FooterBoxCooperationList);
