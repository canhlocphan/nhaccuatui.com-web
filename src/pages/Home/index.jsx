// libs
import React, { useContext } from "react";
// components
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
// mocks
import HomeData from "../../mocks/Home";
// useContext
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const Home = () => {
  const { defaultLanguage } = useContext(DrawerContext);
  return (
    <div className="home-wrapper">
      <div className="home">
        <BoxLeft Home={HomeData} defaultLanguage={defaultLanguage} />
        <BoxRight Home={HomeData} defaultLanguage={defaultLanguage} />
      </div>
    </div>
  );
};
export default Home;
