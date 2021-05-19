// libs
import React, { useEffect, useState } from "react";
// components
import FooterCooperationList from "../FooterCooperationList";
import FooterButtonPreCarousel from "../FooterButtonPreCarousel";
import FooterButtonNextCarousel from "../FooterButtonNextCarousel";
// others
import "./styles.scss";

const FooterBoxCooperationList = ({ footer }) => {
  const [startId, setStartId] = useState(0);
  const [stopId, setStopId] = useState(6);
  useEffect(() => {
    const time = setInterval(() => {
      if (startId === 9) {
        setStartId(0);
        setStopId(6);
      } else {
        setStartId(startId + 1);
        setStopId(stopId + 1);
      }
    }, 3000);
    return () => clearInterval(time);
  });
  return (
    <div className="footer-cooperation-list-wrapper">
      <FooterCooperationList footer={footer.cooperationList} startId={startId} stopId={stopId}></FooterCooperationList>
      <FooterButtonPreCarousel
        startId={startId}
        setStartId={setStartId}
        stopId={stopId}
        setStopId={setStopId}
      ></FooterButtonPreCarousel>
      <FooterButtonNextCarousel
        startId={startId}
        setStartId={setStartId}
        stopId={stopId}
        setStopId={setStopId}
      ></FooterButtonNextCarousel>
    </div>
  );
};

export default FooterBoxCooperationList;
