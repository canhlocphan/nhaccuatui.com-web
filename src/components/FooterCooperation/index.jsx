// libs
import React from "react";
// components
import FooterTitleCooperation from "../FooterTitleCooperation";
import FooterBoxCooperationList from "../FooterBoxCooperationList";
// others
import "./styles.scss";

const CooperationFooter = ({ footer }) => (
  <div className="footer-cooperation">
    <FooterTitleCooperation titleName="Liên kết và hợp tác"></FooterTitleCooperation>
    <FooterBoxCooperationList footer={footer}></FooterBoxCooperationList>
  </div>
);

export default CooperationFooter;
