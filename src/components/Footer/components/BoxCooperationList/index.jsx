// libs
import React, { useEffect, useState } from "react";

// components
import CooperationList from "../CooperationList";

// mocks
import Header from "../../../../mocks/Header";

// others
import "./styles.scss";

const BoxCooperationList = () => {
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
      <CooperationList
        header={Header.cooperationList}
        startId={startId}
        stopId={stopId}
        setStartId={setStartId}
        setStopId={setStopId}
      ></CooperationList>
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
    </div>
  );
};

export default BoxCooperationList;
