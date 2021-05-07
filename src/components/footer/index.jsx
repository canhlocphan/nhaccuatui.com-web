import React from "react";

// component footer
import AnotherFooter from "./anotherFooter";
import CooperationFooter from "./cooperationFooter";
import CopyrightFooter from "./copyrightFooter";

import "./styles.scss";

const Footer = () => (
  <div className="footer">
    <div style={{ width: "1170px" }}>
      <CooperationFooter />
      <AnotherFooter />
    </div>
    <CopyrightFooter />
  </div>
);

export default Footer;
