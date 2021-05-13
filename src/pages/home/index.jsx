import React from "react";

// mains
import BoxContent from "./mains/BoxContent";
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";

import "./styles.scss";

const Home = () => (
  <div className="home">
    <BoxContent />
    <BoxLeft />
    <BoxRight />
  </div>
);

export default Home;
