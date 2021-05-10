import React from "react";

// mains
import BoxContent from "./mains/boxContent";
import BoxLeft from "./mains/boxLeft";
import BoxRight from "./mains/boxRight";

import "./styles.scss";

const Home = () => (
  <div className="home">
    <BoxContent />
    <BoxLeft />
    <BoxRight />
  </div>
);

export default Home;
