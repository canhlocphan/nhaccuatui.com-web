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
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    if (on === true) {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          window.addEventListener("scroll", () => {
            window.scrollTo(scrollLeft, scrollTop);
          });
          next();
        } else if (e.key === "ArrowDown") {
          window.addEventListener("scroll", () => {
            window.scrollTo(scrollLeft, scrollTop);
          });
          prev();
        } else
          window.removeEventListener("scroll", () => {
            window.scrollTo(scrollLeft, scrollTop);
          });
      });
    } else {
      window.removeEventListener("scroll", () => {
        window.scrollTo(scrollLeft, scrollTop);
      });
    }
  });
  return (
    <div
      className="footer-cooperation-list-wrapper"
      onMouseEnter={() => {
        setOn(true);
      }}
      onMouseLeave={() => {
        setOn(false);
      }}
    >
      <FooterCooperationList footer={footer.cooperationList} startId={startId} stopId={stopId}></FooterCooperationList>
      <FooterButtonPreCarousel prev={prev} />
      <FooterButtonNextCarousel next={next} />
    </div>
  );
};

export default FooterBoxCooperationList;
