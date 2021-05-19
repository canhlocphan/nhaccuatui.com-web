// libs
import React from "react";
// components
import FooterTopKeyword from "../FooterTopKeyword";
import FooterSocialList from "../FooterSocialList";
import FooterDownloadList from "../FooterDownloadList";
// mocks
import Footer from "../../mocks/Footer";
// others
import "./styles.scss";

const FooterLastNavigation = ({ titleName }) => (
  <div className="last-navigation">
    <div className="f-title">{titleName}</div>
    <FooterTopKeyword topKeyword={Footer.topKeyword} />
    <div className="f-title in-col">Kết nối với chúng tôi</div>
    <FooterSocialList socialList={Footer.socialList} />
    <FooterDownloadList downloadList={Footer.downloadList} />
  </div>
);

export default FooterLastNavigation;
