// libs
import React from "react";
// others
import "./styles.scss";

const FooterDownloadList = ({ downloadList }) => (
  <ul className="download-list">
    {downloadList.map(({ id, link, title }) => (
      <a
        key={id}
        href="https://play.google.com/store/apps/details?id=com.nctcorp.nhaccuatui&hl=vi"
        target="_blank"
        rel="noreferrer"
        className="download"
        title={title}
      >
        <img src={link} alt="social"></img>
      </a>
    ))}
  </ul>
);

export default FooterDownloadList;
