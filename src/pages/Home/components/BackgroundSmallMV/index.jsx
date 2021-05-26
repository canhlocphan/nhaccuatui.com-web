// libs
import React from "react";
// components
import BackgroundVideo from "../BackgroundVideo";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const BackgroundSmallMV = ({ songName, image }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="small-mv-bg" title={songName} onClick={handleChangePage}>
      <div className="overlay"></div>
      <BackgroundVideo image={image} songName={songName}></BackgroundVideo>
    </div>
  );
};

export default BackgroundSmallMV;
