// libs
import React from "react";
// others
import "./styles.scss";

const FooterTopKeyword = ({ topKeyword }) => (
  <ul className="top-keyword">
    {topKeyword.map(({ id, title }) => (
      <span className="keyword" title={title} keyword={id}>
        {title}
      </span>
    ))}
  </ul>
);

export default FooterTopKeyword;
