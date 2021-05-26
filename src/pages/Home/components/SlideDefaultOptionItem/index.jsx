// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const SlideDefaultOptionItem = ({ item, imageDefault, handleImageDefault }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <li
      className="slide-option-item"
      title={item.title}
      onMouseEnter={() => {
        handleImageDefault(item.id, item.large);
      }}
      onClick={handleChangePage}
    >
      <span className={`${imageDefault === item.large ? "active" : "none"}`}></span>
      <img src={item.small} alt="option-slide-item" style={{ cursor: "pointer" }}></img>
    </li>
  );
};

export default SlideDefaultOptionItem;
