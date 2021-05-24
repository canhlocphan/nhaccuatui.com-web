// libs
import React from "react";
// others
import "./styles.scss";

const FooterSocialList = ({ socialList }) => (
  <ul className="social-list">
    {socialList.map(({ id, link, title }) => (
      <a
        key={id}
        href="https://www.facebook.com/NhacCuaTuiOfficial"
        target="_blank"
        rel="noreferrer"
        className="social"
        title={title}
      >
        <img src={link} alt="social"></img>
      </a>
    ))}
  </ul>
);

export default FooterSocialList;
