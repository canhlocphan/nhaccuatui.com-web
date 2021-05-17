// libs
import React from "react";

// components
import Navigation from "../Navigation";

// mocks
import Footer from "../../../../mocks/Footer";
import LastNavigation from "../LastNavigation";

// others
import "./styles.scss";

const FooterNavigation = () => (
  <div className="another-footer-wrapper-inner">
    <Navigation footer={Footer.spNavigation}>Hỗ trợ</Navigation>
    <Navigation footer={Footer.otherNavigation}>Sản phẩm khác</Navigation>
    <LastNavigation>Top từ khóa</LastNavigation>
  </div>
);

export default FooterNavigation;
