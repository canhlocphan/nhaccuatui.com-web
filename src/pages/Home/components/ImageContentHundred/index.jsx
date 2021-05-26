// libs
import React from "react";
// components
import BackgroundVideo from "../BackgroundVideo";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const ImageContentHundred = ({ image }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="bg-content" onClick={handleChangePage}>
      <BackgroundVideo image={image}></BackgroundVideo>
    </div>
  );
};

export default ImageContentHundred;
