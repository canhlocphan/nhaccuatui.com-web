// libs
import React from "react";
import classNames from "classnames";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const SlideDefaultOptionItem = ({ item, imageDefault, handleImageDefault }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  const className = classNames(`${imageDefault === item.large ? "active" : "none"}`);
  return (
    <li
      className="slide-option-item"
      title={item.title}
      onMouseEnter={() => {
        handleImageDefault(item.id, item.large);
      }}
      onClick={handleChangePage}
    >
      <span className={className} />
      <img src={item.small} alt="option-slide-item" />
    </li>
  );
};

export default SlideDefaultOptionItem;
