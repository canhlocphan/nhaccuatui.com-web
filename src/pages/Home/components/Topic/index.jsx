// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const Topic = ({ image, title }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <li className="topic" title={title} onClick={handleChangePage}>
      <img src={image} alt={title}></img>
    </li>
  );
};

export default Topic;
