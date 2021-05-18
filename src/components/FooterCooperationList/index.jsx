// libs
import React from "react";
// components
import FooterCooperationItem from "../FooterCooperationItem";
// others
import "./styles.scss";

const FooterCooperationList = ({ footer, startId, stopId }) => (
  <ul className="footer-cooperation-list">
    {footer.slice(startId, stopId).map(({ id, image }) => (
      <FooterCooperationItem key={id} image={image}></FooterCooperationItem>
    ))}
  </ul>
);
export default FooterCooperationList;
