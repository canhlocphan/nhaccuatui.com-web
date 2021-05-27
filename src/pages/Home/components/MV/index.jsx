// libs
import React from "react";
// components
import BackgroundVideo from "../BackgroundVideo";
import LargeVideoInformation from "../LargeVideoInformation";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const MV = (props) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <li className="mv-container">
      <div className="mv" onClick={handleChangePage}>
        <div className="overlay"></div>
        <BackgroundVideo image={props.image}></BackgroundVideo>
        <LargeVideoInformation songName={props.songName} title={props.title}></LargeVideoInformation>
      </div>
    </li>
  );
};

export default MV;
