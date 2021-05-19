// libs
import React from "react";
// components
import FooterNavigationTitle from "../FooterNavigationTitle";
import FooterLastNavigation from "../FooterLastNavigation";
// others
import "./styles.scss";

const FooterNavigation = ({ footer }) => (
  <div className="footer-navigation-wrapper">
    <FooterNavigationTitle footer={footer.spNavigation} nameTitle="Hỗ trợ"></FooterNavigationTitle>
    <FooterNavigationTitle footer={footer.otherNavigation} nameTitle="Sản phẩm khác"></FooterNavigationTitle>
    <FooterLastNavigation titleName="Top từ khóa"></FooterLastNavigation>
  </div>
);

export default FooterNavigation;
