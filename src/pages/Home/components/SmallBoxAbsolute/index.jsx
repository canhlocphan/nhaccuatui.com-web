// libs
import React from "react";
// components
import SmallBox from "../SmallBox";
import TimeVideo from "../TimeVideo";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const SmallBoxAbsolute = (props) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="small-box-absolute" onClick={handleChangePage}>
      <SmallBox view={props.view} image={props.image}></SmallBox>
      <TimeVideo time={props.time}></TimeVideo>
    </div>
  );
};

export default SmallBoxAbsolute;
