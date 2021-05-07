import React from "react";
import Footer from "../../components/footer";

// mains
import Header from "../../components/header";
import BoxContent from "./mains/boxContent";
import BoxLeft from "./mains/boxLeft";
import BoxRight from "./mains/boxRight";

import "./styles.scss";

const Home = () => (
  <div className="home">
    <Header />
    <BoxContent />
    <div style={{ margin: "0 auto", width: "1190px", position: "relative" }}>
      <BoxLeft />
      <BoxRight />
    </div>
    <Footer />
  </div>
);

export default Home;
