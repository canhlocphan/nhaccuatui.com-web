// libs
import React, { useContext } from "react";
// components
import BoxContent from "./mains/BoxContent";
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
    <div className="home">
      <BoxContent />
      <BoxLeft Home={HomeData} defaultLanguage={defaultLanguage} />
      <BoxRight Home={HomeData} defaultLanguage={defaultLanguage} />
    </div>
  );
};
export default Home;
