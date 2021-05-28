// libs
import React, { useContext } from "react";
// components
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
import SettingDrawer from "../../components/SettingDrawer";
// mocks
import HomeData from "../../mocks/Home";
// useContext
import { LanguageContext } from "../../context";
// others
import "./styles.scss";

const Home = () => {
  const { defaultLanguage } = useContext(LanguageContext);
  return (
    <div className="home-wrapper">
      <div className="home">
        <BoxLeft Home={HomeData} defaultLanguage={defaultLanguage} />
        <BoxRight Home={HomeData} defaultLanguage={defaultLanguage} />
      </div>
      <SettingDrawer />
    </div>
  );
};
export default Home;
