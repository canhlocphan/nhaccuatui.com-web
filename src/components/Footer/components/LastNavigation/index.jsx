// libs
import React from "react";

// components
import TopKeyword from "../TopKeyword";
import SocialList from "../SocialList";
import DownloadList from "../DownloadList";

// others
import "./styles.scss";

const LastNavigation = (props) => (
  <div className="last-navigation">
    <div className="f-title">{props.children}</div>
    <TopKeyword></TopKeyword>
    <div className="f-title in-col">Kết nối với chúng tôi</div>
    <SocialList></SocialList>
    <DownloadList></DownloadList>
  </div>
);

export default LastNavigation;
