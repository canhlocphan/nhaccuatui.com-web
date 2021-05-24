// libs
import React, { useContext } from "react";
// components
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
// mocks
import HomeData from "../../mocks/Home";
// others
import "./styles.scss";
import { LanguageContext } from "../../context";

const Home = () => {
  const { defaultLanguage } = useContext(LanguageContext);
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
