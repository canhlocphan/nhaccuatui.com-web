// libs
import React from "react";
// components
import BoxContent from "./mains/BoxContent";
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
// mocks
import HomeData from "../../mocks/Home";
// others
import "./styles.scss";

const Home = () => (
  <div className="home">
    <BoxContent />
    <BoxLeft Home={HomeData} />
    <BoxRight Home={HomeData} />
  </div>
);

export default Home;
