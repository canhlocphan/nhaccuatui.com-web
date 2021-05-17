// libs
import React from "react";

// components
import FooterTitleCooperation from "../FooterTitleCooperation";
import BoxCooperationList from "../BoxCooperationList";

// others
import "./styles.scss";

const CooperationFooter = () => (
  <div className="footer-cooperation">
    <FooterTitleCooperation>Liên kết và hợp tác</FooterTitleCooperation>
    <BoxCooperationList></BoxCooperationList>
  </div>
);

export default CooperationFooter;
